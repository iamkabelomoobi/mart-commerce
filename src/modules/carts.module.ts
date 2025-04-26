import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Address,
  Cart,
  Customer,
  LineItem,
  Promotion,
  ShippingMethod,
} from '../entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Address,
      Cart,
      Customer,
      LineItem,
      Promotion,
      ShippingMethod,
    ]),
  ],
})
export class CartsModule {}
