import { Query, Resolver } from '@nestjs/graphql';
import { MangaService } from './manga.service';

@Resolver()
export class MangaResolver {
    constructor(private readonly mangaService: MangaService) {}

    @Query(() => String)
    manga() {
        this.mangaService.test();
        return 'test';
    }
}
