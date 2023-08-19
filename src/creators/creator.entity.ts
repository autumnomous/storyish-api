import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { Name } from "src/shared/name.entity";
import { BookToCreator } from "src/books/booktocreator.entity";

@Entity()
export class Creator extends Name {
    @PrimaryGeneratedColumn("uuid")
    public id: string;
    
    @OneToMany(() => BookToCreator, (bookToCreator) => bookToCreator.creator,{onDelete:"CASCADE", cascade:true})
    public books: BookToCreator;

}