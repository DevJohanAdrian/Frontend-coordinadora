import { AuthRepository } from '@/domain/repositories/AuthRepository';
import { User } from '@/domain/entities/User';
import { RegisterCredentials } from '@/domain/interfaces/User.interface';


export class RegisterUserUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute(credentials: RegisterCredentials): Promise<User> {
    const user = await this.authRepo.register(credentials);
    // Aquí puedes añadir lógica adicional si lo necesitas
    return user;
  }
}
