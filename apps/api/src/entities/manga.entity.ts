import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export default class Manga {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string;

    @Property()
    title!: string;
}
