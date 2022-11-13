import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Manga } from '@app/entities';
import { PublicationStatus } from '@app/entities/manga.entity';

@Injectable()
export class MangaService {
    constructor(private readonly em: EntityManager) {}

    async test() {
        const manga = this.em.create(Manga, {
            banner: 'test',
            chapters: 1,
            cover: {
                large: 'test',
                original: 'test',
                small: 'test'
            },
            description: 'test',
            external: {
                mal: 'tesst'
            },
            genres: ['test'],
            origin: 'test',

            status: PublicationStatus.CANCELLED,
            synonyms: ['test'],
            title: 'test'
        });

        await this.em.flush();
    }
}
