import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { Name } from "src/shared/name.entity";
import { MediaToCreator } from "src/shared/mediatocreator.entity";

@Entity()
export class Creator extends Name {
    @PrimaryGeneratedColumn("uuid")
    public id: string;
    
    @OneToMany(() => MediaToCreator, (mediaToCreator) => mediaToCreator.creator,{onDelete:"CASCADE", cascade:true})
    public mediaToCreators: MediaToCreator;

}