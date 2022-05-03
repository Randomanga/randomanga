import { CreateExternalArgs } from '@/manga/dto/create-external.args';
import { CreateTitleArgs } from '@/manga/dto/create-title.args';
import { Tag } from '@/models';
import { Status } from '@/models/manga.model';
import { InputType, Field } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload, Upload } from 'graphql-upload';

@InputType('CreateMangaArgs')
export class CreateMangaArgs {
  @Field(() => CreateTitleArgs)
  title: CreateTitleArgs;

  chapters?: number;

  volumes?: number;

  description: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  genres: string[];

  origin: string;

  status: Status;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  synonyms: string[];

  @Field(() => GraphQLUpload, { nullable: true })
  cover?: FileUpload;

  @Field(() => GraphQLUpload, { nullable: true })
  banner?: FileUpload;

  external?: CreateExternalArgs;

  tags: Tag[];
}
