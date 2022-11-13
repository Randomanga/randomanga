import { NodeInterface, ResolvedGlobalId } from '@libs/relay';
import { PrimaryKey } from '@mikro-orm/core';

export abstract class CustomBaseEntity extends NodeInterface {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: ResolvedGlobalId;
}
