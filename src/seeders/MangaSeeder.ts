import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Manga } from '@app/entities';
import { PublicationStatus } from '@app/entities/manga.entity';

export class MangaSeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
        em.create(Manga, {
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
    }
}
