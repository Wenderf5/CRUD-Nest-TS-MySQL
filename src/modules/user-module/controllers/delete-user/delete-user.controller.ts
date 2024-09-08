import { Controller, Delete, HttpStatus, Param } from '@nestjs/common';
import { DeleteUserService } from '../../services/delete-user/delete-user.service';

@Controller('/delete-user/:cpf')
export class DeleteUserController {
    constructor(private readonly deleteUserService: DeleteUserService) { }

    @Delete()
    DeleteUser(@Param('cpf') cpf: string): Promise<HttpStatus> {
        return this.deleteUserService.DeleteUser({ cpf: cpf });
    }
}
