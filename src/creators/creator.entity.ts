import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Creator {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName:string;


}