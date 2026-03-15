import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); //isso aqui permite que a gente use os dtos com as validações, sem isso o class-validator não funciona

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
  