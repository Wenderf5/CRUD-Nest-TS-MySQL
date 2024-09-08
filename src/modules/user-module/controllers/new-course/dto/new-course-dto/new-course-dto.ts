import { IsString } from "class-validator";

export class NewCourseDto {
    @IsString()
    cpf_user: string;
    @IsString()
    course_name: string;
}
