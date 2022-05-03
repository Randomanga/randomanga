import { SaveMangaDTO } from '@/manga/dto/save-manga.dto';
import { Injectable } from '@nestjs/common';
import { Prisma, Status } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { UpdateMangaArgs } from './dto/update-manga.args';

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
          connect: payload.tags.map((tag) => ({ id: tag.id })),
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

  update(id: string, updateMangaInput: UpdateMangaArgs) {
    return `This action updates a #${id} manga`;
  }

  remove(id: string) {
    return `This action removes a #${id} manga`;
  }
}
