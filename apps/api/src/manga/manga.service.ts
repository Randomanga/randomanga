import { EntityManager, MikroORM } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Manga } from '@app/api/entities';

@Injectable()
export class MangaService {
    constructor(private readonly em: EntityManager) {}

    async test() {
        const manga = this.em.create(Manga, {
            title: 'One Piece 2'
        });

        await this.em.flush();
    }
}
