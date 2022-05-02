import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Title {
  @Field(() => ID)
  id: string;

  english?: string;
  romaji?: string;
  native?: string;
}
