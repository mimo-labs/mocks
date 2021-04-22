import { Test, TestingModule } from '@nestjs/testing';
import { AuthMemberService } from './auth-member.service';

describe('AuthMemberService', () => {
  let service: AuthMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthMemberService],
    }).compile();

    service = module.get<AuthMemberService>(AuthMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
