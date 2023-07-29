import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { MediaToCreator } from './mediatocreator.entity';

@Entity()
export class Media {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    releaseDate: Date;
    
    @Column()
    title: string;

    @Column({type: 'simple-json'  })
    alternateTitles: string[];

    @Column({type: 'simple-json'  })
    tags: string[];
    
    @Column()
    synopsis: string;

    @OneToMany(() => MediaToCreator, (mediaToCreator) => mediaToCreator.media)
    mediaToCreators: MediaToCreator

}