import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  AddressModule,
  CartModule,
  CategoryModule,
  CustomerModule,
  LineItemModule,
  OrderModule,
  ProductModule,
  PromotionModule,
  ShippingMethodModule,
  UserModule,
  VariantModule,
} from './modules';
import {
  Address,
  Cart,
  Category,
  Customer,
  LineItem,
  Order,
  Variant,
  Product,
  Promotion,
  ShippingMethod,
  User,
} from './entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [
          Address,
          Cart,
          Category,
          Customer,
          LineItem,
          Order,
          Variant,
          Product,
          Promotion,
          ShippingMethod,
          User,
        ],
        synchronize: true,
        logging: true,
      }),
    }),
    AddressModule,
    CartModule,
    CategoryModule,
    CustomerModule,
    LineItemModule,
    OrderModule,
    ProductModule,
    PromotionModule,
    ShippingMethodModule,
    UserModule,
    VariantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    Logger.log('PostgreSQL connection established');
  }
}
