import { Body, Controller, Post } from '@nestjs/common';
import { DeleteUserDto } from 'src/user-module/dto/delete-user-dto/delete-user-dto';
import { DeleteUserService } from 'src/user-module/services/delete-user/delete-user.service';

@Controller('delete-user')
export class DeleteUserController {
    constructor(private readonly deleteUserService: DeleteUserService){}

    @Post()
    DeleteUser(@Body() user: DeleteUserDto){
        return this.deleteUserService.DeleteUser(user);
    }
}
