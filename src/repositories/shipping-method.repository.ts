import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ShippingMethod } from '../entities/shipping-method.entity';

@Injectable()
export class ShippingMethodRepository extends Repository<ShippingMethod> {}
