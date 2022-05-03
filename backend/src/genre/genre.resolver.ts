import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GenreService } from './genre.service';
import { Genre } from './entities/genre.entity';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';

@Resolver(() => Genre)
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}

  @Mutation(() => Genre)
  createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    return this.genreService.create(createGenreInput);
  }

  @Query(() => [Genre], { name: 'genre' })
  findAll() {
    return this.genreService.findAll();
  }

  @Query(() => Genre, { name: 'genre' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.genreService.findOne(id);
  }

  @Mutation(() => Genre)
  updateGenre(@Args('updateGenreInput') updateGenreInput: UpdateGenreInput) {
    return this.genreService.update(updateGenreInput.id, updateGenreInput);
  }

  @Mutation(() => Genre)
  removeGenre(@Args('id', { type: () => Int }) id: number) {
    return this.genreService.remove(id);
  }
}
