import { User } from "@/domain/entities/User"

export interface AuthState {
    user: User | null
    isLoading: boolean
    isError: boolean
    isAuth: boolean
    error: Error | null
  }