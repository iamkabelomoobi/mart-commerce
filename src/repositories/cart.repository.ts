import { Repository } from 'typeorm';
import { Cart } from '../entities/cart.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartRepository extends Repository<Cart> {}
