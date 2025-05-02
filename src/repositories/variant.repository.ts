import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Variant } from '../entities/product-variant.entity';

@Injectable()
export class VariantRepository extends Repository<Variant> {}
