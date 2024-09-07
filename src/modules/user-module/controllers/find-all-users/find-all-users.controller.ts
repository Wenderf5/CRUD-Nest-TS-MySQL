import { Controller, Get, HttpStatus } from '@nestjs/common';
import { user_course } from 'src/dataBase/entitys/user_course.entity';
import { users } from 'src/dataBase/entitys/users.entity';
import { FindAllUsersService } from '../../services/find-all-users/find-all-users.service';

interface courseInterface {
    id: number;
    name: string;
}

interface userInterface {
    id: number;
    name: string;
    cpf: string;
    courses: courseInterface[];
}

class userClass {
    id: number;
    name: string;
    cpf: string;
    courses: courseInterface[];

    constructor(id: number, name: string, cpf: string) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.courses = [];
    }
}

@Controller('/find-all-users')
export class FindAllUsersController {
    constructor(private readonly finAllUsers: FindAllUsersService) { }

    @Get()
    async FindAllUsers(): Promise<userInterface[] | HttpStatus> {
        const result: userInterface[] = [];
        const users: users[] = await this.finAllUsers.FindAllUsers();
        const courses: user_course[] = await this.finAllUsers.FindAllCourses();

        if (!users || !courses) {
            return HttpStatus.BAD_REQUEST;
        }

        users.map((item, index) => {
            const user = new userClass(item.id, item.name, item.cpf);
            courses.map((item, index) => {
                if (item.cpf_user === user.cpf) {
                    user.courses.push({
                        id: item.id,
                        name: item.course_name
                    });
                }
            });
            result.push(user);
        });

        return result;
    }
}
