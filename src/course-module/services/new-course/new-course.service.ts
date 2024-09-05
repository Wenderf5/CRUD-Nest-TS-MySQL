import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { newCourseDTO } from 'src/course-module/controllers/new-course/dto/new-course-dto/new-course-dto';
import { course } from 'src/dataBase/entitys/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewCourseService {
    constructor(
        @InjectRepository(course)
        private readonly course_repository: Repository<course>
    ) { }

    newCourse(newCourse: newCourseDTO): HttpStatus {
        try {
            this.course_repository.save(newCourse);
            return HttpStatus.CREATED;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
