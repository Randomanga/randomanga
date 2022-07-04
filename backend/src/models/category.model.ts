import {
  Field,
  GraphQLISODateTime,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => ID)
  id: string;
  /**
   * The name of the category.
   */
  name: string;

  /**
   * What group this category belongs to.
   */
  group: CategoryGroup;

  @Field(() => GraphQLISODateTime)
  updatedAt: string;

  @Field(() => GraphQLISODateTime)
  createdAt: string;
}

export enum CategoryGroup {
  TAG = 'TAG',
  GENRE = 'GENRE',
}

registerEnumType(CategoryGroup, {
  name: 'CategoryGroup',
  description: 'What kind of category this is',
});

enum CategorySort {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

registerEnumType(CategorySort, {
  name: 'CategorySort',
  description: 'How to sort categories',
});
