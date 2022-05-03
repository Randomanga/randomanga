import { CreateMangaArgs } from './create-manga.args';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMangaArgs extends PartialType(CreateMangaArgs) {
  @Field(() => String)
  id: string;
}
