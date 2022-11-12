import { Test, TestingModule } from '@nestjs/testing';
import { MangaService } from '@app/api/manga/manga.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';

describe('MangaService', () => {
    let service: MangaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [MikroOrmModule.forRoot()],
            providers: [MangaService]
        }).compile();

        service = module.get<MangaService>(MangaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
