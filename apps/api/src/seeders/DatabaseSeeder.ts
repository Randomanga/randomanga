import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Manga } from '@app/api/entities';
import { MangaSeeder } from '@app/api/seeders/MangaSeeder';

export class DatabaseSeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
        return this.call(em, [MangaSeeder]);
    }
}
