import { Module } from '@nestjs/common';
import { AuthMemberService } from './auth-member.service';
import { AuthMemberController } from './auth-member.controller';

@Module({
  controllers: [AuthMemberController],
  providers: [AuthMemberService]
})
export class AuthMemberModule {}
