import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;
  username: string;
  email: string;
  password: string;

  @Field(() => GraphQLISODateTime, { nullable: false })
  createdAt: string;
  @Field(() => GraphQLISODateTime, { nullable: false })
  updatedAt: string;
}
