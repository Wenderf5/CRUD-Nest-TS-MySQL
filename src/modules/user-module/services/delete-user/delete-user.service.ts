import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from 'src/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteUserService {
    constructor(@InjectRepository(users) private readonly usersRepository: Repository<users>) { }

    async DeleteUser(cpf: { cpf: string }): Promise<HttpStatus> {
        const result = await this.usersRepository.delete(cpf)
        if (result.affected === 0) {
            return HttpStatus.BAD_REQUEST;
        } else {
            return HttpStatus.OK;
        }
    }
}
