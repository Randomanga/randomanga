import { Title } from '@/models';
import { Field, InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class CreateTitleArgs extends OmitType(Title, ['id']) {
  @Field(() => String, { nullable: true })
  english?: string;

  @Field(() => String, { nullable: true })
  native?: string;

  @Field(() => String, { nullable: true })
  romaji?: string;
}
