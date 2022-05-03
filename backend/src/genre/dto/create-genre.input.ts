import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGenreInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
