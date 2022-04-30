import { Module } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaResolver } from './manga.resolver';

@Module({
  providers: [MangaResolver, MangaService]
})
export class MangaModule {}
