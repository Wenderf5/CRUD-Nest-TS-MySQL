import { Controller, Delete, HttpStatus, Param } from '@nestjs/common';
import { DeleteCourseService } from '../../services/delete-course/delete-course.service';

@Controller('/delete-course-user/:id')
export class DeleteCourseController {
    constructor(
        private readonly delete_course_service: DeleteCourseService
    ) { }

    @Delete()
    DeleteCourse(@Param('id') id: number): Promise<HttpStatus> {
        return this.delete_course_service.DeleteCourse({ id: id });
    }
}
