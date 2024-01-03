import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Media } from 'src/shared/exclude/media.entity';
import { MovieToCreator } from './movietocreator.entity';

@Entity()
export class Movie extends Media{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToMany(()=> MovieToCreator, (movieToCreator) => movieToCreator.movie, {onDelete:"CASCADE", cascade:true})
    creators: MovieToCreator
}