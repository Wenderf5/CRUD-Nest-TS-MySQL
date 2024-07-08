import { IsString } from "class-validator"

export class NewUserDto {
    @IsString()
    email: string
    @IsString()
    password: string
}
