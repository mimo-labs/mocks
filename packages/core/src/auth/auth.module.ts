import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthMemberModule } from './auth-member/auth-member.module';

@Module({
  providers: [AuthService],
  imports: [AuthMemberModule]
})
export class AuthModule {}
