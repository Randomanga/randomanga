import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export default class Manga {
    @PrimaryKey()
    id!: string;

    @Property()
    title!: string;
}
