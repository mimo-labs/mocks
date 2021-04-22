import { Test, TestingModule } from '@nestjs/testing';
import { AuthMemberController } from './auth-member.controller';
import { AuthMemberService } from './auth-member.service';

describe('AuthMemberController', () => {
  let controller: AuthMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthMemberController],
      providers: [AuthMemberService],
    }).compile();

    controller = module.get<AuthMemberController>(AuthMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
