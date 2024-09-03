import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { NewUserDto } from 'src/user-module/controllers/new-user/dto/new-user-dto/new-user-dto';
import { NewUserService } from 'src/user-module/services/new-user/new-user.service';

@Controller('/new-user')
export class NewUserController {
    constructor(private readonly newUserService: NewUserService) { }

    @Post()
    NewUser(@Body() user: NewUserDto): Promise<HttpStatus> {
        return this.newUserService.NewUser(user);
    }
}
