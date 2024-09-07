import { Test, TestingModule } from '@nestjs/testing';
import { NewCourseService } from './new-course.service';

describe('NewCourseService', () => {
  let service: NewCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewCourseService],
    }).compile();

    service = module.get<NewCourseService>(NewCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
