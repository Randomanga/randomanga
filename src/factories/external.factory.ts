import { ExternalLinks } from '@app/entities/external.entity';
import { Factory, Faker } from '@mikro-orm/seeder';

export class ExternalLinksFactory extends Factory<ExternalLinks> {
    model = ExternalLinks;

    definition(faker: Faker): Partial<ExternalLinks> {
        return {
            al: faker.internet.url(),
            kitsu: faker.internet.url(),
            mal: faker.internet.url(),
            mdex: faker.internet.url(),
            mu: faker.internet.url(),
            nu: faker.internet.url()
        };
    }
}
