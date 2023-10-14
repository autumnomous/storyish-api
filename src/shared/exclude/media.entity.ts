import {Entity, Column} from 'typeorm';

@Entity()
export class Media {

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

}