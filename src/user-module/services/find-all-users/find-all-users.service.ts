import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_course } from 'src/dataBase/entitys/user_course.entity';
import { users } from 'src/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllUsersService {
    constructor(
        @InjectRepository(users)
        private readonly users_repository: Repository<users>,
        @InjectRepository(user_course)
        private readonly user_course_repository: Repository<user_course>
    ) { }

    async FindAllUsers(): Promise<users[]> {
        const users: users[] = await this.users_repository.find();
        return users;
    }

    async FindAllCourses(): Promise<user_course[]> {
        const courses: user_course[] = await this.user_course_repository.find();
        return courses;
    }
}
