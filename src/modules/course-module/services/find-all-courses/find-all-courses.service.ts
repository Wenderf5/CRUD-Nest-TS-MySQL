import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { course } from 'src/dataBase/entitys/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllCoursesService {
    constructor(
        @InjectRepository(course)
        private readonly course_repository: Repository<course>
    ) { }

    async FindAllCourses(): Promise<course[]> {
        const courses: course[] = await this.course_repository.find();
        return courses;
    }
}
