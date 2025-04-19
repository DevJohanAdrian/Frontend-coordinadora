import { AuthRepository  } from '@/domain/repositories/AuthRepository';
import { User } from '@/domain/entities/User';
import { axiosPublic } from '../services/axios/axiosConfigInstances';
import { LoginCredentials, RefreshTokenUser, RegisterCredentials } from '@/domain/interfaces/User.interface';


export class AuthApiRepository implements AuthRepository {
  async login(credentials: LoginCredentials): Promise<User> {
    const response = await axiosPublic.post<User>('/users/signin', credentials)
    return response.data;
  }

  async refreshToken(): Promise<RefreshTokenUser> {
    const response = await axiosPublic.get<RefreshTokenUser>('/users/refresh-token')
    return response.data;
  }

  async register(credentials: RegisterCredentials): Promise<User> {
    const response = await axiosPublic.post<User>('/users/signup', credentials);
    return response.data;
  }
}