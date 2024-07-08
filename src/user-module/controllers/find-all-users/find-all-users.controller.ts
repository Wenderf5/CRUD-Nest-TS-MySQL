import { Controller, Get } from '@nestjs/common';
import { FindAllUsersService } from 'src/user-module/services/find-all-users/find-all-users.service';

@Controller('find-all-users')
export class FindAllUsersController {
    constructor(private readonly finAllUsers: FindAllUsersService){}

    @Get()
    FindAllUsers(){
        return this.finAllUsers.FindAllUsers();
    }
}
