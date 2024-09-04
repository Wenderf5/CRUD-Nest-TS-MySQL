import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class user_course {
    @PrimaryColumn()
    id: number;
    @Column()
    cpf_user: string;
    @Column()
    course_name: string;
}