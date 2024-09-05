import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { DeleteUserDto } from './dto/delete-user-dto/delete-user-dto';
import { DeleteUserService } from 'src/user-module/services/delete-user/delete-user.service';

@Controller('/delete-user')
export class DeleteUserController {
    constructor(private readonly deleteUserService: DeleteUserService) { }

    @Post()
    DeleteUser(@Body() cpf: DeleteUserDto): Promise<HttpStatus> {
        return this.deleteUserService.DeleteUser(cpf);
    }
}
