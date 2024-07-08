import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/user-module/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteUserService {
    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) { }

    async DeleteUser(user) {
        const result =  await this.usersRepository.delete(user)
        if(result.affected === 0){
            return "Usuario não encontrado!"
        }else{
            return "Usuario deletado com sucesso!"
        }
    }
}
