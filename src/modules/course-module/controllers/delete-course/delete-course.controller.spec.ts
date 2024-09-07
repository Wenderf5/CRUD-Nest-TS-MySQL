import { Test, TestingModule } from '@nestjs/testing';
import { DeleteCourseController } from './delete-course.controller';

describe('DeleteCourseController', () => {
  let controller: DeleteCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteCourseController],
    }).compile();

    controller = module.get<DeleteCourseController>(DeleteCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
