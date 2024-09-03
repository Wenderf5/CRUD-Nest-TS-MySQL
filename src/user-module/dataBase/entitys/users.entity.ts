import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class users{
    @PrimaryColumn()
    id: number;
    @Column()
    cpf: string;
    @Column()
    name: string;
}