import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExternalLinks {
  @Field(() => ID)
  id: string;

  /**
   * Link to NovelUpdates
   */
  nu?: string;

  /**
   * Link to Mangadex
   */
  mdex?: string;

  /**
   * Link to MyAnimeLisst
   */
  mal?: string;

  /**
   * Link to Anilist
   */
  al?: string;
  /**
   * Link to Kitsu
   */
  kitsu?: string;
  /**
   * Link to Mangaupdates
   */
  mu?: string;
}
