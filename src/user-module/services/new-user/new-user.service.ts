import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/user-module/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewUserService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>){}

    async NewUser(newUser){
        try {
            await this.usersRepository.save(newUser);
            return "Usuario cadastrado com sucesso!"
        } catch (error) {
            return `Erro ao cadastrar usuario: ${error}` 
        }
    }
}
