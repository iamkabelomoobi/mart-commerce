import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../entities/customer.entity';
import { CustomerRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerRepository],
  exports: [CustomerRepository],
})
export class CustomerModule {}
