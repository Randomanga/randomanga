import { Module } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaResolver } from './manga.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import Manga from '~/entities/manga.entity';

@Module({
    imports: [MikroOrmModule.forFeature({ entities: [Manga] })],
    providers: [MangaResolver, MangaService]
})
export class MangaModule {}
