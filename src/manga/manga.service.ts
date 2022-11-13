import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Manga } from '@app/entities';
import { PublicationStatus } from '@app/entities/manga.entity';
//@ts-ignore
import { knexPaginator as paginate } from 'apollo-cursor-pagination';
import { MangaConnection } from '@app/manga/dto/manga.connection';
import { ConnectionArgs } from '@app/libs/relay';

@Injectable()
export class MangaService {
    constructor(private readonly em: EntityManager) {}

    async find(args: ConnectionArgs): Promise<MangaConnection> {
        const repo = this.em.getRepository(Manga);

        const res: MangaConnection = await paginate(
            repo.qb().getKnexQuery(),
            args
        );

        return res;
    }
}
