import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { AuthServiceLoginResponse, AuthServiceValidateUserResponse } from "auth/auth.types";
import { MemberService } from "organization/member/member.service";

@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private jwtService: JwtService
  ) {}

  // TODO: type strictly
  async validateUser(username: string, pass: string): Promise<AuthServiceValidateUserResponse> {
    const member = await MemberService.findOneByUsername(username);

    if (bcrypt.compare(pass, member.password)) {
      const { password, ...memberInfo } = member;

      return memberInfo;
    }
  }

  // TODO: type
  async login(user: any): Promise<AuthServiceLoginResponse> {
    const payload = { username: user.username, sub: user.id }

    return {
      accessToken: this.jwtService.sign(payload)
    }
  }
}
