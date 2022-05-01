import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Title {
  @Field((type) => ID)
  id: string;

  @Field((type) => String, { nullable: true })
  english?: string;
  @Field((type) => String, { nullable: true })
  romaji?: string;
  @Field((type) => String, { nullable: true })
  native?: string;
}
