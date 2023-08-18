import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { MediaToCreator } from './mediatocreator.entity';

@Entity()
export class Media {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        nullable: true,
    })
    releaseDate: Date;
    
    @Column()
    title: string;

    @Column({type: 'simple-json',nullable: true})
    alternateTitles: string[];

    @Column({type: 'simple-json',nullable: true})
    tags: string[];
    
    @Column({
        nullable: true
    })
    synopsis: string;

    @OneToMany(() => MediaToCreator, (mediaToCreator) => mediaToCreator.media)
    mediaToCreators: MediaToCreator

}