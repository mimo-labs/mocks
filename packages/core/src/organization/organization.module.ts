import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [MemberModule, RoleModule]
})
export class OrganizationModule {}
