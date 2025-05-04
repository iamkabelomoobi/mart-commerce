import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from '../repositories';
import { Admin } from '@entities/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminRepository],
  exports: [AdminRepository],
})
export class AdminModule {
  constructor(private readonly adminRepository: AdminRepository) {}
}
