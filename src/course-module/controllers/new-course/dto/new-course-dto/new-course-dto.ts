import { IsString } from "class-validator";

export class newCourseDTO {
    @IsString()
    name: string;
}