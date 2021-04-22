import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthMemberService } from './auth-member.service';
import { CreateAuthMemberDto } from './dto/create-auth-member.dto';
import { UpdateAuthMemberDto } from './dto/update-auth-member.dto';

@Controller('auth-member')
export class AuthMemberController {
  constructor(private readonly authMemberService: AuthMemberService) {}

  @Post()
  create(@Body() createAuthMemberDto: CreateAuthMemberDto) {
    return this.authMemberService.create(createAuthMemberDto);
  }

  @Get()
  findAll() {
    return this.authMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authMemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthMemberDto: UpdateAuthMemberDto) {
    return this.authMemberService.update(+id, updateAuthMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authMemberService.remove(+id);
  }
}
