import { PrimaryKey } from '@mikro-orm/core';
import { Field, ID, InterfaceType } from '@nestjs/graphql';
import { v4 } from 'uuid';

@InterfaceType('Node')
export class CustomBaseEntity {
    @PrimaryKey({ type: 'text' })
    @Field(() => ID)
    id!: string;
}
