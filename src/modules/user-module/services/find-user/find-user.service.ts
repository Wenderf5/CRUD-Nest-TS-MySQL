import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_course } from 'src/dataBase/entitys/user_course.entity';
import { users } from 'src/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindUserService {
    constructor(
        @InjectRepository(user_course)
        private user_course_repository: Repository<user_course>,
        @InjectRepository(users)
        private users_repository: Repository<users>
    ) { }

    async FindUser(cpf: { cpf: string }): Promise<users> {
        const result: users = await this.users_repository.findOneBy(cpf);
        return result;
    }

    async FindUserCourse(cpf: { cpf: string }): Promise<user_course[]> {
        const result: user_course[] = await this.user_course_repository.find({
            where: { cpf_user: cpf.cpf },
        });
        return result;
    }
}