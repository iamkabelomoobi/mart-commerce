import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartsModule, OrdersModule, ProductsModule } from './modules';
import {
  Address,
  Cart,
  Category,
  Customer,
  LineItem,
  Order,
  Product,
  Promotion,
  ShippingMethod,
  Variant,
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
        type: 'mongodb',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        database: config.get<string>('DB_NAME'),
        entities: [
          Address,
          Cart,
          Category,
          Customer,
          LineItem,
          Order,
          Product,
          Promotion,
          ShippingMethod,
          Variant,
        ],
        synchronize: true,
        logging: true,
      }),
    }),
    CartsModule,
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    Logger.log('MongoDB connection established');
  }
}
