import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cover {
  @Field(() => ID)
  id: string;
  /**
   * Smallest size image. Used for thumbnails.
   */
  small: string;
  /**
   * The original image that was uploaded. Highest quality.
   */
  original: string;
  /**
   * Large size image. Used for fullscreen.
   */
  large: string;
}
