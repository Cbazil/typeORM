import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Channel } from "./Channel";
import { Tag } from "./Tag";

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => Channel, channel => channel.videos)
    channel: Channel;

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[];
}