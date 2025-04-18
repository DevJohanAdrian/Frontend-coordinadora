import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoginUserUseCase, RefreshTokenUseCase } from '@/application/usecases/auth'
import { AuthApiRepository } from '@/infrastructure/repositories/AuthApiRepository'
import { AuthState } from '@/presentation/types/states/AuthState'



const initialState: AuthState = {
  isLoading: false,
  user: null,
  isError: false,
  isAuth: false,
  errorMessage: ''
}

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const useCase = new LoginUserUseCase(new AuthApiRepository())
      const user = await useCase.execute(credentials)
      localStorage.setItem('token', user.token) // guardar token
      return user
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const refreshToken = createAsyncThunk('auth/refresh-token', async (_, { rejectWithValue }) => {
  try {
    const useCase = new RefreshTokenUseCase(new AuthApiRepository())
    const user = await useCase.execute()
    return user;
  } catch (error: any) {
    return rejectWithValue(error.response.data)
  }
})



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuth = false;
      sessionStorage.removeItem('token')
    },
  },
  extraReducers: builder => {
    //login
    builder.addCase(login.pending, state => {
      state.isLoading = true;
      state.isError = false;
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isAuth = false; 
      state.errorMessage = action.payload as string;
    })

    //refreshToken
    builder.addCase(refreshToken.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.user) {
        state.user.token = action.payload.token;
        sessionStorage.setItem('accessToken', action.payload.token);
        console.log('new-accesst store', action.payload.token)
      }

    })
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload as string;
    })
  },
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;


