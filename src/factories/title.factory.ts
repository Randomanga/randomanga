import Title from '@app/entities/title.entity';
import { Factory, Faker } from '@mikro-orm/seeder';

export class TitleFactory extends Factory<Title> {
    model = Title;

    definition(faker: Faker): Partial<Title> {
        return {
            english: faker.lorem.word(),
            native: faker.lorem.word(),
            romaji: faker.lorem.word()
        };
    }
}
