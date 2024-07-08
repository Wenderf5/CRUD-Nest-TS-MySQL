import { Test, TestingModule } from '@nestjs/testing';
import { NewUserController } from './new-user.controller';

describe('NewUserController', () => {
  let controller: NewUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewUserController],
    }).compile();

    controller = module.get<NewUserController>(NewUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
