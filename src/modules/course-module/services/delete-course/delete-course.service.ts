import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { deleteCourseDTO } from '../../controllers/delete-course/dto/delete-course-dto/delete-course-dto';
import { course } from 'src/dataBase/entitys/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteCourseService {
    constructor(@InjectRepository(course)
    private readonly course_repository: Repository<course>
    ) { }

    async deleteCourse(course: deleteCourseDTO) {
        const result = await this.course_repository.delete(course);
        if (result.affected === 0) {
            return HttpStatus.BAD_REQUEST;
        } else {
            return HttpStatus.OK;
        }
    }
}
