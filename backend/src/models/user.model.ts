import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: false })
  username: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => GraphQLISODateTime, { nullable: false })
  createdAt: string;

  @Field(() => GraphQLISODateTime, { nullable: false })
  updatedAt: string;
}
