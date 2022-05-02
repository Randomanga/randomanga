import { Cover, ExternalLinks, Tag, Title } from '@/models';
import {
  Field,
  GraphQLISODateTime,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

@ObjectType()
export class Manga {
  @Field(() => ID)
  id: string;

  /**
   * The default title of the manga. Regardless of language.
   */
  title: Title;

  @Field(() => String, { nullable: false, defaultValue: ' ' })
  description: string;

  cover: Cover;

  banner?: string;

  genres: string[];

  tags: Tag[];

  synonyms: string[];

  status: Status;

  /**
   * The country which the manga originated
   */
  origin: string;

  /**
   * Links to external websites for this manga.
   */
  external: ExternalLinks;

  /**
   * The number of chapters translated for this manga
   */
  chapters?: number;

  /**
   * The number of volumes translated for this manga.
   */
  volumes?: number;

  @Field(() => GraphQLISODateTime)
  updatedAt: string;

  @Field(() => GraphQLISODateTime)
  createdAt: string;
}

export enum Status {
  ONGOING,
  COMPLETED,
  CANCELLED,
  HIATUS,
}
registerEnumType(Status, {
  name: 'Status',
  description: 'The publication status of the manga. ',
  valuesMap: {
    ONGOING: {
      description:
        'The manga is still being published in the country of origin. ',
    },
    COMPLETED: {
      description: 'The manga has finished publishing',
    },
    CANCELLED: {
      description: 'The manga has been cancelled, reason unknown. ',
    },
    HIATUS: {
      description:
        'Similar to cancelled, but with a chance it might come back. ',
    },
  },
});
