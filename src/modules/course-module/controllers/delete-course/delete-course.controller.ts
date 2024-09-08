import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { DeleteCourseService } from '../../services/delete-course/delete-course.service';

@Controller('/delete-course/:id')
export class DeleteCourseController {
    constructor(private readonly deleteCourseService: DeleteCourseService) { }

    @Delete()
    deleteCourse(@Param('id') id: number) {
        return this.deleteCourseService.deleteCourse({ id: id });
    }
}
