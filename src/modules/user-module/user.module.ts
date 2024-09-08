import { Module } from '@nestjs/common';
import { NewUserController } from './controllers/new-user/new-user.controller';
import { FindUserController } from './controllers/find-user/find-user.controller';
import { FindAllUsersController } from './controllers/find-all-users/find-all-users.controller';
import { DeleteUserController } from './controllers/delete-user/delete-user.controller';
import { DeleteUserService } from './services/delete-user/delete-user.service';
import { NewUserService } from './services/new-user/new-user.service';
import { FindUserService } from './services/find-user/find-user.service';
import { FindAllUsersService } from './services/find-all-users/find-all-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'src/dataBase/entitys/users.entity';
import { course } from 'src/dataBase/entitys/course.entity';
import { user_course } from 'src/dataBase/entitys/user_course.entity';
import { NewCourseController } from './controllers/new-course/new-course.controller';
import { DeleteCourseService } from './services/delete-course/delete-course.service';
import { NewCourseService } from './services/new-course/new-course.service';
import { DeleteCourseController } from './controllers/delete-course/delete-course.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            users,
            user_course,
            course
        ])
    ],
    controllers: [
        NewUserController,
        FindUserController,
        FindAllUsersController,
        DeleteUserController,
        NewCourseController,
        DeleteCourseController
    ],
    providers: [
        DeleteUserService,
        NewUserService,
        FindUserService,
        FindAllUsersService,
        NewCourseService,
        DeleteCourseService
    ]
})
export class UserModuleModule { }
