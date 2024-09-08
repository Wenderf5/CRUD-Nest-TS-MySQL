import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { newCourseDTO } from '../../controllers/new-course/dto/new-course-dto/new-course-dto';
import { course } from 'src/dataBase/entitys/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewCourseService {
    constructor(
        @InjectRepository(course)
        private readonly course_repository: Repository<course>
    ) { }

    async newCourse(newCourse: newCourseDTO): Promise<HttpStatus | { mensage: string }> {
        try {
            await this.course_repository.save(newCourse);
            return HttpStatus.CREATED;
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                return { mensage: "O curso já está cadastrado!" };
            }
            return HttpStatus.BAD_REQUEST;
        }
    }
}
