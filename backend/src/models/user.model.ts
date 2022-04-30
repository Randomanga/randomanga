import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field((type) => String, { nullable: false })
  username: string;

  @Field((type) => String, { nullable: false })
  email: string;

  @Field((type) => String, { nullable: false })
  password: string;

  // TODO: Create scalar for this
  @Field((type) => String, { nullable: false })
  createdAt: string;

  @Field((type) => String, { nullable: false })
  updatedAt: string;
}
