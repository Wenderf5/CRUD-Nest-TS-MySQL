import { Body, Controller, Post } from '@nestjs/common';
import { FindUserDto } from 'src/user-module/dto/find-user-dto/find-user-dto';
import { FindUserService } from 'src/user-module/services/find-user/find-user.service';

@Controller('find-user')
export class FindUserController {
    constructor(private readonly findUser: FindUserService) { }

    @Post()
    FindUser(@Body() email: FindUserDto) {
        return this.findUser.FindUser(email);
    }
}
