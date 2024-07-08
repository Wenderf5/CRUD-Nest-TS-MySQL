import { Body, Controller, Post } from '@nestjs/common';
import { NewUserDto } from 'src/user-module/dto/new-user-dto/new-user-dto';
import { NewUserService } from 'src/user-module/services/new-user/new-user.service';

@Controller('new-user')
export class NewUserController {
    constructor(private readonly newUserService: NewUserService){}

    @Post()
    NewUser(@Body() user: NewUserDto){
        return this.newUserService.NewUser(user);
    }
}
