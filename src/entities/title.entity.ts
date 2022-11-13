import { Entity, Property } from '@mikro-orm/core';
import { NodeInterface, NodeType } from '@libs/relay';
import { Field } from '@nestjs/graphql';
import { CustomBaseEntity } from '@app/common/interfaces/custom-base-entity.interface';

@Entity()
@NodeType()
export default class Title extends CustomBaseEntity {
    @Field()
    @Property()
    english?: string;

    @Field()
    @Property()
    romaji?: string;

    @Field()
    @Property()
    native?: string;
}
