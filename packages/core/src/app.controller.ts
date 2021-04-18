import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

interface Healthcheck {
  status: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('healthcheck')
  @HttpCode(200)
  healthcheck(): Healthcheck {
    return {status: "OK"};
  }
}
