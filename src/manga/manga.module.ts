import { Module } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaResolver } from './manga.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import Manga from '@app/entities/manga.entity';
import { ExternalLinks } from '@app/entities/external.entity';
import Cover from '@app/entities/cover.entity';
import Title from '@app/entities/title.entity';

@Module({
    imports: [],
    providers: [MangaResolver, MangaService]
})
export class MangaModule {}
