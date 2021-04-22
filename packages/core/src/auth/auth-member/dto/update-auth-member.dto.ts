import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthMemberDto } from './create-auth-member.dto';

export class UpdateAuthMemberDto extends PartialType(CreateAuthMemberDto) {}
