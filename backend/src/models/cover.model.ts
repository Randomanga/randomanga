import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cover {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: false })
  small: string;

  @Field(() => String, { nullable: false })
  original: string;

  @Field(() => String, { nullable: false })
  large: string;
}
