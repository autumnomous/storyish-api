import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Media } from "src/shared/media.entity";
import { Name } from "src/shared/name.entity";

@Entity()
export class Creator {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column(() => Name)
    name: Name

    @ManyToMany( (type) => Media, (media) => media.creators)
    media: Media[];

}