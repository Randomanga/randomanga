import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cover {
  @Field((type) => ID)
  id: string;

  @Field((type) => String, { nullable: false })
  small: String;

  @Field((type) => String, { nullable: false })
  original: String;

  @Field((type) => String, { nullable: false })
  large: String;
}
