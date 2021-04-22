import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MocksModule } from './mocks/mocks.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [MocksModule, TypeOrmModule.forRoot(), AuthModule, OrganizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
