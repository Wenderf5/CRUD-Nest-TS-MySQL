import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { NewUserDto } from './dto/new-user-dto/new-user-dto';
import { NewUserService } from '../../services/new-user/new-user.service';

@Controller('/new-user')
export class NewUserController {
    constructor(private readonly newUserService: NewUserService) { }

    @Post()
    NewUser(@Body() user: NewUserDto): Promise<HttpStatus | { mensage: string }> {
        return this.newUserService.NewUser(user);
    }
}
