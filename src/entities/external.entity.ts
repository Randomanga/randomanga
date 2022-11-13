import { CustomBaseEntity } from '@app/common/interfaces/custom-base-entity.interface';
import { NodeType } from '@libs/relay';
import { Entity, Property } from '@mikro-orm/core';
import { Field } from '@nestjs/graphql';

@NodeType()
@Entity()
export class ExternalLinks extends CustomBaseEntity {
    /**
     * Link to NovelUpdates
     */
    @Field()
    @Property()
    nu?: string;

    /**
     * Link to Mangadex
     */
    @Field()
    @Property()
    mdex?: string;

    /**
     * Link to MyAnimeLisst
     */
    @Field()
    @Property()
    mal?: string;

    /**
     * Link to Anilist
     */
    @Field()
    @Property()
    al?: string;

    /**
     * Link to Kitsu
     */
    @Field()
    @Property()
    kitsu?: string;

    /**
     * Link to Mangaupdates
     */
    @Field()
    @Property()
    mu?: string;
}
