import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Promotion } from '../entities/promotion.entity';

@Injectable()
export class PromotionRepository extends Repository<Promotion> {}
