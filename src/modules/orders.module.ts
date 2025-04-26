import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address, Order, LineItem, Customer } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Address, LineItem, Customer])],
  exports: [TypeOrmModule],
})
export class OrdersModule {}
