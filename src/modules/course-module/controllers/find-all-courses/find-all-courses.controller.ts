import { Controller, Get } from '@nestjs/common';
import { FindAllCoursesService } from '../../services/find-all-courses/find-all-courses.service';
import { course } from 'src/dataBase/entitys/course.entity';

@Controller('/find-all-courses')
export class FindAllCoursesController {
    constructor(
        private readonly find_all_courses_service: FindAllCoursesService
    ) { }

    @Get()
    async FindAllCourses() {
        return this.find_all_courses_service.FindAllCourses();
    }
}
