import { Injectable } from '@nestjs/common';
import { CreateMangaInput } from './dto/create-manga.input';
import { UpdateMangaInput } from './dto/update-manga.input';

@Injectable()
export class MangaService {
  create(createMangaInput: CreateMangaInput) {
    return 'This action adds a new manga';
  }

  findAll() {
    return `This action returns all manga`;
  }

  findOne(id: string) {
    return `This action returns a #${id} manga`;
  }

  update(id: string, updateMangaInput: UpdateMangaInput) {
    return `This action updates a #${id} manga`;
  }

  remove(id: string) {
    return `This action removes a #${id} manga`;
  }
}
