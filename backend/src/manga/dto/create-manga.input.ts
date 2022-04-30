import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMangaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
