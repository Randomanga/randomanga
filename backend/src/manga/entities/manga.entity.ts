import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Manga {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
