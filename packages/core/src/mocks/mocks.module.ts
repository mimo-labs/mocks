import { Module } from '@nestjs/common';
import { EndpointModule } from './endpoint/endpoint.module';

@Module({
  imports: [EndpointModule]
})
export class MocksModule {}
