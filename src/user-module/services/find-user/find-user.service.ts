import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/user-module/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindUserService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>){}

    async FindUser(email){
        const result = await this.usersRepository.findOneBy(email);
        if(result == null){
            return "Usuario não encontrado!"
        }else{
            return result;
        }
    }
}