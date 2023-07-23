import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';
import { Creator } from 'src/creators/creator.entity';

@Entity()
export class Media {
    
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    title: string;

    @Column()
    alternateTitles: string[];

    @ManyToMany(() => Creator, (creator) => creator.media,{cascade: true})
    @JoinTable()
    creators: Creator[];

}