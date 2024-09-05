import { Body, Controller, Post } from '@nestjs/common';
import { DeleteCourseService } from 'src/course-module/services/delete-course/delete-course.service';
import { deleteCourseDTO } from './dto/delete-course-dto/delete-course-dto';

@Controller('/delete-course')
export class DeleteCourseController {
    constructor(private readonly deleteCourseService: DeleteCourseService) { }

    @Post()
    deleteCourse(@Body() course: deleteCourseDTO) {
        return this.deleteCourseService.deleteCourse(course);
    }
}
