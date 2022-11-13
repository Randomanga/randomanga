import { Manga } from '@app/entities';
import { PublicationStatus } from '@app/entities/manga.entity';
import { CoverFactory } from '@app/factories/cover.factory';
import { ExternalLinksFactory } from '@app/factories/external.factory';
import { EntityManager } from '@mikro-orm/core';
import { Factory, Faker } from '@mikro-orm/seeder';

export class MangaFactory extends Factory<Manga> {
    private readonly _em: EntityManager;
    constructor(em: EntityManager) {
        super(em);

        this._em = em;
    }
    model = Manga;

    definition(faker: Faker): Partial<Manga> {
        return {
            banner: faker.image.imageUrl(),
            chapters: Number(faker.random.numeric(3)),
            cover: new CoverFactory(this._em).makeOne(),
            description: faker.lorem.paragraph(),
            external: new ExternalLinksFactory(this._em).makeOne(),
            genres: [faker.music.genre()],
            origin: faker.locale,
            status: PublicationStatus.COMPLETED,
            synonyms: [],
            title: faker.music.songName(),
            volumes: 0
        };
    }
}
