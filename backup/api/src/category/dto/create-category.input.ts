import { CategoryGroup } from '@/models';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  name: string;

  group: CategoryGroup;
}
