import { Module } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaResolver } from './manga.resolver';

@Module({
    imports: [],
    providers: [MangaResolver, MangaService]
})
export class MangaModule {}
