import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { FindUserDto } from 'src/user-module/controllers/find-user/dto/find-user-dto/find-user-dto';
import { users } from 'src/user-module/dataBase/entitys/users.entity';
import { FindUserService } from 'src/user-module/services/find-user/find-user.service';

@Controller('/find-user')
export class FindUserController {
    constructor(private readonly findUser: FindUserService) { }

    @Post()
    FindUser(@Body() cpf: FindUserDto): Promise<users | HttpStatus> {
        return this.findUser.FindUser(cpf);
    }
}
