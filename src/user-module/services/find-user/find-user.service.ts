import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindUserDto } from 'src/user-module/controllers/find-user/dto/find-user-dto/find-user-dto';
import { users } from 'src/user-module/dataBase/entitys/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindUserService {
    constructor(@InjectRepository(users) private usersRepository: Repository<users>){}

    async FindUser(cpf: FindUserDto): Promise<users | HttpStatus>{
        const result = await this.usersRepository.findOneBy(cpf);
        if(result == null){
            return HttpStatus.BAD_REQUEST;
        }else{
            return result;
        }
    }
}