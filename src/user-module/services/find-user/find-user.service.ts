import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindUserDto } from 'src/user-module/controllers/find-user/dto/find-user-dto/find-user-dto';
import { user_course } from 'src/user-module/dataBase/entitys/user_course.entity';
import { users } from 'src/user-module/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindUserService {
    constructor(@InjectRepository(user_course) private user_course_repository: Repository<user_course>) { }

    async FindUser(cpf: FindUserDto): Promise<user_course[] | HttpStatus> {
        const result: user_course[] = await this.user_course_repository.find({
            where: { cpf_user: cpf.cpf },
        });
        if (result.length < 0) {
            return HttpStatus.NOT_FOUND;
        } else {
            return result;
        }
    }
}