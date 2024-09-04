import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { FindUserDto } from 'src/user-module/controllers/find-user/dto/find-user-dto/find-user-dto';
import { user_course } from 'src/user-module/dataBase/entitys/user_course.entity';
import { users } from 'src/user-module/dataBase/entitys/users.entity';
import { FindUserService } from 'src/user-module/services/find-user/find-user.service';

@Controller('/find-user')
export class FindUserController {
    constructor(private readonly findUser: FindUserService) { }

    @Post()
    FindUser(@Body() cpf: FindUserDto): Promise<user_course[] | HttpStatus> {
        const result = this.findUser.FindUser(cpf);

        return result;
    }
}
