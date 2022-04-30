import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExternalLinks {
  @Field((type) => ID)
  id: string;

  @Field((type) => String, { nullable: true })
  nu?: string;

  @Field((type) => String, { nullable: true })
  mdex?: string;

  @Field((type) => String, { nullable: true })
  mal?: string;

  @Field((type) => String, { nullable: true })
  al?: string;
}
