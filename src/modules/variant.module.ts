import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Variant } from '../entities/product-variant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Variant])],
  exports: [TypeOrmModule],
})
export class VariantModule {}
