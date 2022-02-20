import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport, TcpOptions} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 4000,
    }
  } as TcpOptions);
  await app.listen();
}
bootstrap();
