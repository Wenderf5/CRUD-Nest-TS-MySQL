import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { FindUserDto } from './dto/find-user-dto/find-user-dto';
import { user_course } from 'src/dataBase/entitys/user_course.entity';
import { users } from 'src/dataBase/entitys/users.entity';
import { FindUserService } from '../../services/find-user/find-user.service';

@Controller('/find-user')
export class FindUserController {
    constructor(private readonly findUser: FindUserService) { }

    @Post()
    async FindUser(@Body() cpf: FindUserDto): Promise<any | HttpStatus> {
        const user = await this.findUser.FindUser(cpf);
        const courses = await this.findUser.FindUserCourse(cpf);

        if (!user) {
            return HttpStatus.NOT_FOUND;
        }

        const result = {
            id: user.id,
            name: user.name,
            cpf: user.cpf,
            courses: []
        }

        courses.map((item, index) => {
            result.courses.push({
                id: item.id,
                course: item.course_name
            });
        })

        return result;
    }
}
