import { AuthRepository } from '@/domain/repositories/AuthRepository';
import { RefreshTokenUser } from '@/domain/interfaces/User.interface';

export class RefreshTokenUseCase {
  constructor(private authRepo: AuthRepository) { }

  async execute(): Promise<RefreshTokenUser> {
    const user = await this.authRepo.refreshToken();
    return user;
  }
}