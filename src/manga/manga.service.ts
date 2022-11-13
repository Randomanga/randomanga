import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Manga } from '@app/entities';
import { PublicationStatus } from '@app/entities/manga.entity';
import { MangaConnection } from '@app/manga/dto/manga.connection';
import { ConnectionArgs } from '@app/libs/relay';
import { paginate } from '@app/libs/relay/common/paginator';

@Injectable()
export class MangaService {
    constructor(private readonly em: EntityManager) {}

    async find(args: ConnectionArgs): Promise<MangaConnection> {
        const repo = this.em.getRepository(Manga);
        const qb = repo.createQueryBuilder();

        qb.where({ status: PublicationStatus.COMPLETED });

        const knex = qb.getKnexQuery();

        return paginate(knex, args);
    }
}
