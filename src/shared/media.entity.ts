import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { MediaToCreator } from './mediatocreator.entity';

@Entity()
export class Media {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    alternateTitles: string[];

    @Column()
    tags: string[];
    
    @Column()
    synopsis: string;

    @OneToMany(() => MediaToCreator, (mediaToCreator) => mediaToCreator.media)
    mediaToCreators: MediaToCreator

}