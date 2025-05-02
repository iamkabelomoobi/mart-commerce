import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineItem } from '../entities/line-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LineItem])],
  exports: [TypeOrmModule],
})
export class LineItemModule {}