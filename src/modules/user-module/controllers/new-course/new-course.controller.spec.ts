import { Test, TestingModule } from '@nestjs/testing';
import { NewCourseController } from './new-course.controller';

describe('NewCourseController', () => {
  let controller: NewCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewCourseController],
    }).compile();

    controller = module.get<NewCourseController>(NewCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
