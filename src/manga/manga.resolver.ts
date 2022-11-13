import { Manga } from '@app/entities';
import { ConnectionArgs } from '@app/libs/relay';
import { MangaConnection } from '@app/manga/dto/manga.connection';
import { Args, Parent, Query, Resolver } from '@nestjs/graphql';
import { connectionFromArray } from 'graphql-relay';
import { MangaService } from './manga.service';

@Resolver(() => Manga)
export class MangaResolver {
    constructor(private readonly mangaService: MangaService) {}

    @Query(() => MangaConnection)
    async mangas(@Args() args: ConnectionArgs) {
        const mangas = await this.mangaService.find(args);
        return mangas;
    }
}
