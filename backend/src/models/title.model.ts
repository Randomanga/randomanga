import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Title {
  @Field((type) => ID)
  id: string;

  @Field((type) => String, { nullable: true })
  english?: String;
  @Field((type) => String, { nullable: true })
  romaji?: String;
  @Field((type) => String, { nullable: true })
  native?: String;
}
