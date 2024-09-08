import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { NewCourseDto } from './dto/new-course-dto/new-course-dto';
import { NewCourseService } from '../../services/new-course/new-course.service';

@Controller('/new-course-user')
export class NewCourseController {
    constructor(
        private readonly new_course_service: NewCourseService
    ) { }

    @Post()
    NewCourse(@Body() course: NewCourseDto): Promise<HttpStatus> {
        return this.new_course_service.NewCourse(course);
    }
}
