import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MangaService } from './manga.service';
import { Manga } from './entities/manga.entity';
import { CreateMangaInput } from './dto/create-manga.input';
import { UpdateMangaInput } from './dto/update-manga.input';

@Resolver(() => Manga)
export class MangaResolver {
  constructor(private readonly mangaService: MangaService) {}

  @Mutation(() => Manga)
  createManga(@Args('createMangaInput') createMangaInput: CreateMangaInput) {
    return this.mangaService.create(createMangaInput);
  }

  @Query(() => [Manga], { name: 'manga' })
  findAll() {
    return this.mangaService.findAll();
  }

  @Query(() => Manga, { name: 'manga' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mangaService.findOne(id);
  }

  @Mutation(() => Manga)
  updateManga(@Args('updateMangaInput') updateMangaInput: UpdateMangaInput) {
    return this.mangaService.update(updateMangaInput.id, updateMangaInput);
  }

  @Mutation(() => Manga)
  removeManga(@Args('id', { type: () => Int }) id: number) {
    return this.mangaService.remove(id);
  }
}
