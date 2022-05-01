import { Cover, ExternalLinks, Tag, Title } from '@app/models';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Manga {
  @Field((type) => ID)
  id: string;

  @Field((type) => Title, {
    nullable: false,
    description: 'The default title of the manga. Regardless of language. ',
  })
  title: Title;

  @Field((type) => String, { nullable: false, defaultValue: ' ' })
  description: string;

  @Field((type) => Cover)
  cover: Cover;

  @Field((type) => String, { nullable: true })
  banner?: string;

  @Field((type) => [String])
  genres: string[];

  @Field((type) => [Tag])
  tags: Tag[];

  @Field((type) => [String])
  synonyms: string[];

  @Field((type) => Status)
  status: Status;

  @Field((type) => String, {
    nullable: false,
    description: 'The country which the manga originated',
  })
  origin: string;

  @Field((type) => ExternalLinks, {
    nullable: false,
    description: 'Links to external websites for this manga. ',
  })
  external: ExternalLinks;

  @Field((type) => Number, {
    nullable: true,
    description: 'The number of chapters translated for this manga',
  })
  chapters?: number;

  @Field((type) => Number, {
    nullable: true,
    description: 'The number of volumes translated for this manga. ',
  })
  volumes?: number;

  // TODO: Create scalar type for this
  @Field((type) => String)
  updatedAt: string;

  @Field((type) => String)
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
