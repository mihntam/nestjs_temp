import { Module } from '@nestjs/common';
import { ApiConfigService } from './services/api-config.service';

@Module({
  providers: [ApiConfigService],
})
export class SharedModule {}
