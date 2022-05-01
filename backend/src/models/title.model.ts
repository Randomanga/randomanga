import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Title {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  english?: string;
  @Field(() => String, { nullable: true })
  romaji?: string;
  @Field(() => String, { nullable: true })
  native?: string;
}
