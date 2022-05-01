import { CreateTitleInput } from '@/manga/dto/create-title.input';
import { InputType, Field } from '@nestjs/graphql';

@InputType('CreateMangaInput')
export class CreateMangaInput {
  @Field(() => CreateTitleInput)
  title: CreateTitleInput;

  @Field(() => String, { nullable: true })
  banner?: string;

  @Field(() => Number, { nullable: true })
  chapters?: number;

  @Field(() => Number, { nullable: true })
  volumes?: number;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  genres: string[];

  @Field(() => String, { nullable: false })
  origin: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  synonyms: string[];
}
