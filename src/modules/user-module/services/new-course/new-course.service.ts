import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_course } from 'src/dataBase/entitys/user_course.entity';
import { Repository } from 'typeorm';
import { NewCourseDto } from '../../controllers/new-course/dto/new-course-dto/new-course-dto';

@Injectable()
export class NewCourseService {
    constructor(
        @InjectRepository(user_course)
        private readonly user_course_repository: Repository<user_course>
    ) { }

    async NewCourse(course: NewCourseDto): Promise<HttpStatus> {
        try {
            await this.user_course_repository.save(course);
            return HttpStatus.CREATED;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
