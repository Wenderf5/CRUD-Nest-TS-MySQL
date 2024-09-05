import { Test, TestingModule } from '@nestjs/testing';
import { DeleteCourseService } from './delete-course.service';

describe('DeleteCourseService', () => {
  let service: DeleteCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteCourseService],
    }).compile();

    service = module.get<DeleteCourseService>(DeleteCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
