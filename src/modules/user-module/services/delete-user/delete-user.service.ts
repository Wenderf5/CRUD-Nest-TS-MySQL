import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_course } from 'src/dataBase/entitys/user_course.entity';
import { users } from 'src/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteUserService {
    constructor(
        @InjectRepository(users)
        private readonly usersRepository: Repository<users>,
        @InjectRepository(user_course)
        private readonly user_course_repository: Repository<user_course>,
    ) { }

    async DeleteUser(cpf: { cpf: string }): Promise<HttpStatus> {
        try {
            const user = await this.usersRepository.findOne({ where: { cpf: cpf.cpf } })
            if (!user) {
                return HttpStatus.NOT_FOUND;
            }
            await this.user_course_repository.delete({ cpf_user: user.cpf })
            const result = await this.usersRepository.delete(cpf)
            if (result.affected === 0) {
                return HttpStatus.BAD_REQUEST;
            } else {
                return HttpStatus.OK;
            }
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
