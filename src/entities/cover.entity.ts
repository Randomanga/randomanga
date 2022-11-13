import { CustomBaseEntity } from '@app/common/interfaces/custom-base-entity.interface';
import { NodeType } from '@libs/relay';
import { Entity, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType({ implements: [CustomBaseEntity] })
export default class Cover extends CustomBaseEntity {
    @Field()
    @Property()
    small!: string;

    @Field()
    @Property()
    large!: string;

    @Field()
    @Property()
    original!: string;
}
