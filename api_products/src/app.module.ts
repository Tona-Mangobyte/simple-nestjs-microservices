import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {OrderController, ProductController} from "./controllers";
import {PRODUCT_SERVICE, ORDER_SERVICE} from "./common/service.constants";
import { OrderService, ProductService } from './services';

@Module({
  imports: [
      ClientsModule.register([
          { name: PRODUCT_SERVICE, transport: Transport.TCP, options: { port: 6000 } },
          { name: ORDER_SERVICE, transport: Transport.TCP, options: { port: 4000 } },
          ]),
  ],
  controllers: [
      OrderController,
      ProductController
  ],
  providers: [OrderService, ProductService]
})
export class AppModule {}
