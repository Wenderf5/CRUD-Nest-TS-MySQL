import { IsString } from "class-validator";

export class NewUserDto {
    @IsString()
    cpf: string;
    @IsString()
    name: string;
}
