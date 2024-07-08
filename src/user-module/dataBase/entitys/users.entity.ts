import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Users{
    @PrimaryColumn()
    id: number
    @Column()
    email: string
    @Column()
    password: string
}