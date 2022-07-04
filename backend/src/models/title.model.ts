import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Title {
  @Field(() => ID)
  id: string;

  /**
   * The translated version of the title.
   */
  english?: string;
  /**
   * The romanized version of the native title. Similar to how the title is pronounced.
   */
  romaji?: string;
  /**
   * Native based on the origin. Meaning, the original name given by the author.
   */
  native?: string;
}
