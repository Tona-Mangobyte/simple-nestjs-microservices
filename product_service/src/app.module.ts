import { Module } from '@nestjs/common';
import {ProductController} from "./controllers";
import { ProductService } from './services';

@Module({
  controllers: [ProductController],
  providers: [ProductService]
})
export class AppModule {}
