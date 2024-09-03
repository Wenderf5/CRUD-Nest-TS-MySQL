import { Controller, Get, HttpStatus } from '@nestjs/common';
import { users } from 'src/user-module/dataBase/entitys/users.entity';
import { FindAllUsersService } from 'src/user-module/services/find-all-users/find-all-users.service';

@Controller('/find-all-users')
export class FindAllUsersController {
    constructor(private readonly finAllUsers: FindAllUsersService){}

    @Get()
    FindAllUsers(): Promise<users[] | HttpStatus>{
        return this.finAllUsers.FindAllUsers();
    }
}
