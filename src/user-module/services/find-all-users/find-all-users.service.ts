import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from 'src/user-module/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllUsersService {
    constructor(@InjectRepository(users) private readonly usersRepository: Repository<users>) { }

    async FindAllUsers(): Promise<users[] | HttpStatus> {
        try {
            const users: users[] = await this.usersRepository.find();
            return users;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
