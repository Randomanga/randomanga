import { CustomBaseEntity } from '@app/common/interfaces/custom-base-entity.interface';
import Cover from '@app/entities/cover.entity';
import { ExternalLinks } from '@app/entities/external.entity';
import { NodeInterface, NodeType } from '@libs/relay';
import {
    Entity,
    OneToMany,
    OneToOne,
    PrimaryKey,
    Property
} from '@mikro-orm/core';
import { registerEnumType } from '@nestjs/graphql';

@Entity()
@NodeType()
export default class Manga extends CustomBaseEntity {
    @Property()
    title!: string;

    @Property()
    description!: string;

    @OneToOne()
    cover!: Cover;

    @Property()
    banner!: string;

    @Property()
    genres!: string[];

    @Property()
    synonyms!: string[];

    @Property()
    status!: PublicationStatus;

    @Property()
    origin!: string;

    @OneToOne()
    external?: ExternalLinks;

    @Property()
    chapters?: number;

    @Property()
    volumes?: number;
}

export enum PublicationStatus {
    ONGOING = 'ONGOING',
    COMPLETED = 'COMPLETED',
    HIATUS = 'HIATUS',
    CANCELLED = 'CANCELLED'
}

registerEnumType(PublicationStatus, {
    name: 'PublicationStatus',
    description: 'The publication status of the manga. ',
    valuesMap: {
        ONGOING: {
            description:
                'The manga is still being published in the country of origin. '
        },
        COMPLETED: {
            description: 'The manga has finished publishing'
        },
        CANCELLED: {
            description: 'The manga has been cancelled, reason unknown. '
        },
        HIATUS: {
            description:
                'Similar to cancelled, but with a chance it might come back. '
        }
    }
});
