import { Module } from '@nestjs/common';
import {OrderController} from "./controllers";
import { OrderService } from './services';

@Module({
  controllers: [OrderController],
  providers: [OrderService]
})
export class AppModule {}
