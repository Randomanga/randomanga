import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MangaService } from './manga.service';
import { CreateMangaArgs } from './dto/create-manga.args';
import { UpdateMangaArgs } from './dto/update-manga.args';
import { Manga } from '@/models';

@Resolver(() => Manga)
export class MangaResolver {
  constructor(private readonly mangaService: MangaService) {}

  @Mutation(() => Manga)
  createManga(
    @Args('create')
    input: CreateMangaArgs,
  ) {
    return this.mangaService.create({
      ...input,
      banner: 'sdaw',
      cover: 'awdaw',
    });
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
  updateManga(@Args('updateMangaInput') updateMangaInput: UpdateMangaArgs) {
    return this.mangaService.update(updateMangaInput.id, updateMangaInput);
  }

  @Mutation(() => Manga)
  removeManga(@Args('id', { type: () => String }) id: string) {
    return this.mangaService.remove(id);
  }
}
