import { IsNumber } from "class-validator";

export class deleteCourseDTO {
    @IsNumber()
    id: number;
}