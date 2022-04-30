import { CreateMangaInput } from './create-manga.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMangaInput extends PartialType(CreateMangaInput) {
  @Field(() => Int)
  id: number;
}
