import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove no expected params
      forbidNonWhitelisted: true, // Throw an error is no expected params are received
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
