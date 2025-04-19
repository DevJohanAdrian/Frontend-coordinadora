import { LoginCredentials, RegisterCredentials, RefreshTokenUser } from "@/domain/interfaces/User.interface";
import { User } from "../entities/User"


export interface AuthRepository {
  login(credentials: LoginCredentials): Promise<User>;
  refreshToken(): Promise<RefreshTokenUser>;
  register(credentials: RegisterCredentials): Promise<User>;
}