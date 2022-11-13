import { Test, TestingModule } from '@nestjs/testing';
import { MangaResolver } from '@app/manga/manga.resolver';
import { MangaService } from '@app/manga/manga.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';

describe('MangaResolver', () => {
    let resolver: MangaResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [MikroOrmModule.forRoot()],
            providers: [MangaResolver, MangaService]
        }).compile();

        resolver = module.get<MangaResolver>(MangaResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
