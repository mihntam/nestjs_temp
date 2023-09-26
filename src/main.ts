import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(), {
    cors: true,
  });
  app.setGlobalPrefix('/api/v1');

  await app.listen(3000);
}
bootstrap();
