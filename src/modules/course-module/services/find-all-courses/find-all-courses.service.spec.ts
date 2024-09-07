import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCoursesService } from './find-all-courses.service';

describe('FindAllCoursesService', () => {
  let service: FindAllCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllCoursesService],
    }).compile();

    service = module.get<FindAllCoursesService>(FindAllCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
