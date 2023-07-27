import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { Name } from "src/shared/name.entity";
import { MediaToCreator } from "src/shared/mediatocreator.entity";

@Entity()
export class Creator {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column(() => Name)
    public name: Name


    @OneToMany(() => MediaToCreator, (mediaToCreator) => mediaToCreator.creator)
    public mediaToCreators: MediaToCreator;

}