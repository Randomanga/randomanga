import { Test, TestingModule } from '@nestjs/testing';
import { GenreResolver } from './genre.resolver';
import { GenreService } from './genre.service';

describe('GenreResolver', () => {
  let resolver: GenreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenreResolver, GenreService],
    }).compile();

    resolver = module.get<GenreResolver>(GenreResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
