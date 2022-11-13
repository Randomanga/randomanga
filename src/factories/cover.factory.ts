import Cover from '@app/entities/cover.entity';
import { Factory, Faker } from '@mikro-orm/seeder';

export class CoverFactory extends Factory<Cover> {
    model = Cover;

    definition(faker: Faker): Partial<Cover> {
        return {
            large: faker.image.imageUrl(),
            original: faker.image.imageUrl(),
            small: faker.image.imageUrl()
        };
    }
}
