import { Module } from '@nestjs/common';
import { NewCourseController } from './controllers/new-course/new-course.controller';
import { DeleteCourseController } from './controllers/delete-course/delete-course.controller';
import { NewCourseService } from './services/new-course/new-course.service';
import { DeleteCourseService } from './services/delete-course/delete-course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { course } from 'src/dataBase/entitys/course.entity';
import { FindAllCoursesController } from './controllers/find-all-courses/find-all-courses.controller';
import { FindAllCoursesService } from './services/find-all-courses/find-all-courses.service';

@Module({
  imports: [TypeOrmModule.forFeature([course])],
  controllers: [NewCourseController, DeleteCourseController, FindAllCoursesController],
  providers: [NewCourseService, DeleteCourseService, FindAllCoursesService]
})
export class CourseModuleModule {}
