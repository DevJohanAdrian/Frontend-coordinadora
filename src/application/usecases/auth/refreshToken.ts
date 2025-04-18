import { AuthRepository } from '@/domain/repositories/AuthRepository';
import { User } from '@/domain/entities/User';

export class RefreshTokenUseCase {
  constructor(private authRepo: AuthRepository) { }

  async execute(): Promise<User> {
    const user = await this.authRepo.refreshToken();
    return user;
  }
}