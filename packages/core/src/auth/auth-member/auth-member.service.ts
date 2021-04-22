import { Injectable } from '@nestjs/common';
import { CreateAuthMemberDto } from './dto/create-auth-member.dto';
import { UpdateAuthMemberDto } from './dto/update-auth-member.dto';

@Injectable()
export class AuthMemberService {
  create(createAuthMemberDto: CreateAuthMemberDto) {
    return 'This action adds a new authMember';
  }

  findAll() {
    return `This action returns all authMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authMember`;
  }

  update(id: number, updateAuthMemberDto: UpdateAuthMemberDto) {
    return `This action updates a #${id} authMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} authMember`;
  }
}
