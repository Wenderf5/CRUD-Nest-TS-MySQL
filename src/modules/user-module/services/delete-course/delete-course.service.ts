import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_course } from 'src/dataBase/entitys/user_course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteCourseService {
    constructor(
        @InjectRepository(user_course)
        private readonly user_course_repository: Repository<user_course>
    ) { }

    async DeleteCourse(course: { id: number }): Promise<HttpStatus> {
        try {
            const result = await this.user_course_repository.delete(course);
            if (result.affected === 0) {
                return HttpStatus.BAD_REQUEST;
            } else {
                return HttpStatus.OK;
            }
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
