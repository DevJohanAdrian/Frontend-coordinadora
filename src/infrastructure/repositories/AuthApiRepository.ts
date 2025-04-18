import { AuthRepository, LoginCredentials } from '@/domain/repositories/AuthRepository';
import { User, RefreshTokenUser } from '@/domain/entities/User';
import { axiosPublic } from '../services/axios/axiosConfigInstances';


export class AuthApiRepository implements AuthRepository {
  async login(credentials: LoginCredentials): Promise<User> {
    const response = await axiosPublic.post<User>('/auth/signin', credentials)
    return response.data;
  }
  async refreshToken(): Promise<RefreshTokenUser> {
    const response = await axiosPublic.get<RefreshTokenUser>('/auth/refresh-token')
    return response.data;
  }
}