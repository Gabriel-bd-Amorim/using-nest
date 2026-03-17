import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: true,
  })); // isso permite usar DTOs em rotas PATCH/PUT sem exigir todos os campos

  await app.listen(process.env.PORT!);
}
bootstrap();
  