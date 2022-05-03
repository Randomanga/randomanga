import { SaveMangaDTO } from '@/manga/dto/save-manga.input';
import { Injectable } from '@nestjs/common';
import { Prisma, Status } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { UpdateMangaInput } from './dto/update-manga.input';

@Injectable()
export class MangaService {
  private readonly mangaRepository: Prisma.MangaDelegate<Prisma.RejectOnNotFound>;

  constructor(protected readonly prismaService: PrismaService) {
    this.mangaRepository = this.prismaService.manga;
  }
  async create(payload: SaveMangaDTO) {
    const manga = await this.mangaRepository.create({
      data: {
        ...payload,
        title: {
          create: payload.title,
        },
        tags: {
          connect: payload.tags.map((id) => ({ id })),
        },
      },
    });

    return manga;
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
