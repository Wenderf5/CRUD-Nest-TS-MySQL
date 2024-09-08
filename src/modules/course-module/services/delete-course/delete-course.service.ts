import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { course } from 'src/dataBase/entitys/course.entity';
import { user_course } from 'src/dataBase/entitys/user_course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteCourseService {
    constructor(
        @InjectRepository(course)
        private readonly course_repository: Repository<course>,
        @InjectRepository(user_course)
        private readonly user_course_repository: Repository<user_course>
    ) { }

    async deleteCourse(course: { id: number }) {
        try {
            const course_name = await this.course_repository.findOne({ where: { id: course.id } });
            if (!course_name) {
                return HttpStatus.NOT_FOUND;
            }
            await this.user_course_repository.delete({ course_name: course_name.name });
            const result = await this.course_repository.delete(course);
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
