import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewUserDto } from '../../controllers/new-user/dto/new-user-dto/new-user-dto';
import { users } from 'src/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class NewUserService {
    constructor(@InjectRepository(users) private usersRepository: Repository<users>) { }

    async NewUser(newUser: NewUserDto): Promise<HttpStatus> {
        try {
            await this.usersRepository.save(newUser);
            return HttpStatus.CREATED;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
