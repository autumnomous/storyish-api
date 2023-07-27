import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Media } from "./media.entity";
import { Creator } from "../creators/creator.entity";

@Entity()
export class MediaToCreator {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public mediaID: string;

    @Column()
    public creatorID: string;

    @Column()
    public creatorTitle: string;

    @ManyToOne(() => Media, (media) => media.mediaToCreators)
    public media: Media;

    @ManyToOne(() => Creator, (creator) => creator.mediaToCreators)
    public creator: Creator;
}