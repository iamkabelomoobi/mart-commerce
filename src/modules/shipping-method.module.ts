import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingMethod } from '../entities/shipping-method.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShippingMethod])],
  exports: [TypeOrmModule],
})
export class ShippingMethodModule {}