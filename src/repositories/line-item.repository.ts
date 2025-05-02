import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { LineItem } from '../entities/line-item.entity';

@Injectable()
export class LineItemRepository extends Repository<LineItem> {}
