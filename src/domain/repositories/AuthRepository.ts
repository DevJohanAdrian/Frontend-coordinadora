import { User, RefreshTokenUser } from "../entities/User";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthRepository {
  login(credentials: LoginCredentials): Promise<User>;
  refreshToken(): Promise<RefreshTokenUser>;
}