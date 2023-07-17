import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Book {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    // have a separate table for creators to be 
    // used across different media types
    // @Column()
    // author:string;

    @Column()
    isbn:string;
}