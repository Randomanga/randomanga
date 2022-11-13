import { CustomBaseEntity } from '@app/common/interfaces/custom-base-entity.interface';
import Cover from '@app/entities/cover.entity';
import { ExternalLinks } from '@app/entities/external.entity';
import { Entity, OneToOne, Property } from '@mikro-orm/core';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@Entity()
@ObjectType({ implements: [CustomBaseEntity] })
export default class Manga extends CustomBaseEntity {
    @Property()
    @Field()
    title!: string;

    @Property({ type: 'text' })
    @Field()
    description!: string;

    @OneToOne(() => Cover)
    @Field()
    cover!: Cover;

    @Property()
    @Field()
    banner!: string;

    @Property()
    @Field(() => [String])
    genres!: string[];

    @Property()
    @Field(() => [String])
    synonyms!: string[];

    @Property()
    @Field()
    status!: PublicationStatus;

    @Property()
    @Field()
    origin!: string;

    @OneToOne(() => ExternalLinks)
    @Field()
    external?: ExternalLinks;

    @Property()
    @Field()
    chapters?: number;

    @Property()
    @Field()
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
