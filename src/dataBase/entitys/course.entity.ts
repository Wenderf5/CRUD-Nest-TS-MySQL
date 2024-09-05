import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class course {
    @PrimaryColumn()
    id: number;
    @Column()
    name: string;
}