import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tag {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: false })
  name: string;
}
