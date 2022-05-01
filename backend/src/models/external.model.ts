import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExternalLinks {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true, description: 'Novelupdates link' })
  nu?: string;

  @Field(() => String, { nullable: true, description: 'Mangadex link' })
  mdex?: string;

  @Field(() => String, { nullable: true, description: 'MyAnimeList link' })
  mal?: string;

  @Field(() => String, { nullable: true, description: 'Anilist link' })
  al?: string;

  @Field(() => String, { nullable: true, description: 'Kitsu link' })
  kitsu?: string;
}
