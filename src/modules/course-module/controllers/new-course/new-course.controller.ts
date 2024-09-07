import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { NewCourseService } from '../../services/new-course/new-course.service';
import { newCourseDTO } from './dto/new-course-dto/new-course-dto';

@Controller('/new-course')
export class NewCourseController {
    constructor(private readonly new_course_service: NewCourseService){}

    @Post()
    newCourse(@Body() newCourse: newCourseDTO): HttpStatus{
        return this.new_course_service.newCourse(newCourse);
    }
}
