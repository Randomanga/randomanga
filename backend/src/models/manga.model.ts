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

  @Field(() => Title, {
    nullable: false,
    description: 'The default title of the manga. Regardless of language. ',
  })
  title: Title;

  @Field(() => String, { nullable: false, defaultValue: ' ' })
  description: string;

  @Field(() => Cover)
  cover: Cover;

  @Field(() => String, { nullable: true })
  banner?: string;

  @Field(() => [String])
  genres: string[];

  @Field(() => [Tag])
  tags: Tag[];

  @Field(() => [String])
  synonyms: string[];

  @Field(() => Status)
  status: Status;

  @Field(() => String, {
    nullable: false,
    description: 'The country which the manga originated',
  })
  origin: string;

  @Field(() => ExternalLinks, {
    nullable: false,
    description: 'Links to external websites for this manga. ',
  })
  external: ExternalLinks;

  @Field(() => Number, {
    nullable: true,
    description: 'The number of chapters translated for this manga',
  })
  chapters?: number;

  @Field(() => Number, {
    nullable: true,
    description: 'The number of volumes translated for this manga. ',
  })
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
