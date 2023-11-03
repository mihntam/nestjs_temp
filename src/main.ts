import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { SharedModule } from './shared/shared.module';
import { ApiConfigService } from './shared/services/api-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(), {
    cors: true,
  });
  app.setGlobalPrefix('/api/v1');

  const configService = app.select(SharedModule).get(ApiConfigService);

  const port = configService.appConfig.port;
  await app.listen(port, '0.0.0.0');

  console.info(`server running on ${await app.getUrl()}`);
}
bootstrap();
