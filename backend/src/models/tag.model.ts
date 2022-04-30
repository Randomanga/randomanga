import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tag {
  @Field((type) => ID)
  id: string;

  @Field((type) => String, { nullable: false })
  name: string;
}
