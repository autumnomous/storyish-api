import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { Name } from "src/shared/name.entity";
import { BookToCreator } from "src/books/booktocreator.entity";
import { MovieToCreator } from "src/movie/movietocreator.entity";

@Entity()
export class Creator extends Name {
    @PrimaryGeneratedColumn("uuid")
    public id: string;
    
    @OneToMany(() => BookToCreator, (bookToCreator) => bookToCreator.creator,{onDelete:"CASCADE", cascade:true})
    public books: BookToCreator;

    @OneToMany(()=>MovieToCreator, (movieToCreator)=> movieToCreator.creator, {onDelete:"CASCADE", cascade:true})
    public movies: MovieToCreator
}