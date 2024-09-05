import { Module } from '@nestjs/common';
import { NewCourseController } from './controllers/new-course/new-course.controller';
import { DeleteCourseController } from './controllers/delete-course/delete-course.controller';
import { NewCourseService } from './services/new-course/new-course.service';
import { DeleteCourseService } from './services/delete-course/delete-course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { course } from 'src/dataBase/entitys/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([course])],
  controllers: [NewCourseController, DeleteCourseController],
  providers: [NewCourseService, DeleteCourseService]
})
export class CourseModuleModule {}
