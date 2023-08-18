import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Creator } from "../creators/creator.entity";
import { Book } from "src/books/book.entity";

@Entity()
export class BookToCreator {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({default:"author"})
    public creatorTitle: string;

    @ManyToOne(() => Book, (book) => book.mediaToCreators)
    public book: Book;

    @ManyToOne(() => Creator, (creator) => creator.mediaToCreators)
    public creator: Creator;
}