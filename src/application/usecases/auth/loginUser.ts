import { AuthRepository } from '@/domain/repositories/AuthRepository';
import { User } from '@/domain/entities/User';
import { LoginCredentials } from '@/domain/interfaces/User.interface';


export class LoginUserUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute(credentials: LoginCredentials): Promise<User> {
    const user = await this.authRepo.login(credentials);
    // Podrías aplicar lógica adicional aquí (guardar token, validar roles, etc.)
    return user;
  }
}