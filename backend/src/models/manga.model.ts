import { Cover, Tag, Title, ExternalLinks } from '@/models';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Manga {
  @Field((type) => ID)
  id: string;

  @Field((type) => Title)
  title: Title;

  @Field((type) => String, { nullable: false })
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

  @Field((type) => String)
  origin: string;

  @Field((type) => ExternalLinks)
  external: ExternalLinks;

  @Field((type) => Number, { nullable: true })
  chapters?: number;

  @Field((type) => Number, { nullable: true })
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
