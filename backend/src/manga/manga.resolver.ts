import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MangaService } from './manga.service';
import { CreateMangaInput } from './dto/create-manga.input';
import { UpdateMangaInput } from './dto/update-manga.input';
import { Manga } from '@app/models';

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
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.mangaService.findOne(id);
  }

  @Mutation(() => Manga)
  updateManga(@Args('updateMangaInput') updateMangaInput: UpdateMangaInput) {
    return this.mangaService.update(updateMangaInput.id, updateMangaInput);
  }

  @Mutation(() => Manga)
  removeManga(@Args('id', { type: () => String }) id: string) {
    return this.mangaService.remove(id);
  }
}
