import { CreateExternalInput } from '@/manga/dto/create-external.input';
import { CreateTitleInput } from '@/manga/dto/create-title.input';
import { Tag } from '@/models';
import { Status } from '@/models/manga.model';
import { InputType, Field, ID } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload, Upload } from 'graphql-upload';

@InputType('CreateMangaArgs')
export class CreateMangaInput {
  @Field(() => CreateTitleInput)
  title: CreateTitleInput;

  chapters?: number;

  volumes?: number;

  description: string;

  origin: string;

  status: Status;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  synonyms: string[];

  @Field(() => GraphQLUpload, { nullable: true })
  cover?: FileUpload;

  @Field(() => GraphQLUpload, { nullable: true })
  banner?: FileUpload;

  external?: CreateExternalInput;
  @Field(() => [ID], { nullable: true, defaultValue: [] })
  tags: [string];

  @Field(() => [String], { nullable: true, defaultValue: [] })
  genres: string[];
}
