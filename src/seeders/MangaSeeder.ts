import type { EntityManager } from '@mikro-orm/core';
import { faker, Seeder } from '@mikro-orm/seeder';
import { Manga } from '@app/entities';
import { PublicationStatus } from '@app/entities/manga.entity';
import { MangaFactory } from '@app/factories/manga.factory';

export class MangaSeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
        new MangaFactory(em).make(10);
    }
}
