import { CreateMangaInput } from '@/manga/dto/create-manga.input';

export type SaveMangaDTO = Omit<CreateMangaInput, 'cover' | 'banner'> & {
  cover?: string;
  banner?: string;
};
