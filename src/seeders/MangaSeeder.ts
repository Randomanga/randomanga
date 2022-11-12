import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Manga } from '~/entities';

export class MangaSeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
        em.create(Manga, {
            title: 'cunt',
        });
    }
}
