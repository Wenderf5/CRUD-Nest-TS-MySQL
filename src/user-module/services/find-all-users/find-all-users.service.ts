import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/user-module/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllUsersService {
    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) { }

    async FindAllUsers() {
        try {
            return  await this.usersRepository.find();
        }catch(error){
            return `Erro ao pegar usuarios: ${error}`
        }
    }
}
