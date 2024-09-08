import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { FindUserService } from '../../services/find-user/find-user.service';

interface coursesInterface {
    id: number;
    courses: string;
}

interface resultInterface {
    id: number;
    name: string;
    cpf: string;
    courses: coursesInterface[];
}

@Controller('/find-user/:cpf')
export class FindUserController {
    constructor(private readonly findUser: FindUserService) { }

    @Get()
    async FindUser(@Param('cpf') cpf: string): Promise<resultInterface | HttpStatus> {
        const user = await this.findUser.FindUser({ cpf: cpf });
        const courses = await this.findUser.FindUserCourse({ cpf: cpf });

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
