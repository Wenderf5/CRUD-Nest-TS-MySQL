import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCoursesController } from './find-all-courses.controller';

describe('FindAllCoursesController', () => {
  let controller: FindAllCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllCoursesController],
    }).compile();

    controller = module.get<FindAllCoursesController>(FindAllCoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
