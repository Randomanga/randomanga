import { CreateMangaArgs } from '@/manga/dto/create-manga.args';

export type SaveMangaDTO = Omit<CreateMangaArgs, 'cover' | 'banner'> & {
  cover?: string;
  banner?: string;
};
