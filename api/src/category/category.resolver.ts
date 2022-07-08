import { Category } from '@/models/category.model';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PaginationArgs, Connection } from 'prisma-cursor-pagination';
import { catchError } from 'rxjs';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(@Args('create') payload: CreateCategoryInput) {
    return this.categoryService.create(payload);
  }

  @Query(() => [Category])
  categories(@Args('args') pagination: PaginationArgs) {
    return this.categoryService.findAll();
  }

  @Query(() => Category)
  category(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => Category)
  updateCategory(@Args('update') payload: UpdateCategoryInput) {
    return this.categoryService.update(payload.id, payload);
  }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.remove(id);
  }
}
