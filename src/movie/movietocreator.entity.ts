import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Creator } from '../creators/creator.entity';
import { Movie } from 'src/movie/movie.entity';


@Entity()
export class MovieToCreator {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({default:"director"})
    public creatorTitle: string;

    @ManyToOne(() => Movie, (movie) => movie.creators)
    public movie: Movie;

    @ManyToOne(() => Creator, (creator) => creator.movies)
    public creator: Creator;
}