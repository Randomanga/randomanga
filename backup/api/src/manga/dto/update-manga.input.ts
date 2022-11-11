import { CreateMangaInput } from './create-manga.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMangaInput extends PartialType(CreateMangaInput) {
  @Field(() => String)
  id: string;
}
