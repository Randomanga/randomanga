import { Entity, Property } from '@mikro-orm/core';
import { NodeType } from '@libs/relay';
import { Field, ObjectType } from '@nestjs/graphql';
import { CustomBaseEntity } from '@app/common/interfaces/custom-base-entity.interface';

@Entity()
@ObjectType({ implements: [CustomBaseEntity] })
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
