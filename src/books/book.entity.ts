import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { Media } from 'src/shared/media.entity';

@Entity()
export class Book {
    
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    isbn:string;

    @Column(() => Media)
    media: Media

}