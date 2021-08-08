import { MangaController } from './../../Web/Api/Controllers/Manga.controller';
import { MangaRepository } from './../../Data/Repositories/Mangas.repository';
import { MangaService } from './../../Core/Services/Manga.service';
import * as Awilix from 'awilix';

import { UsersRepository } from 'Data/Repositories/Users.repository';
import { SubscribersRepository } from 'Data/Repositories/Subscribers.repository';
import { AuthService } from 'Core/Services/Auth.service';
import { ArgonToHasherAdapter } from 'Core/Adapters/ArgonToHasher.adapter';
import { UserService } from 'Core/Services/User.service';
import { UserController } from 'Web/Api/Controllers/User.controller';
import { RandomListController } from 'Web/Api/Controllers/RandomList.controller';
import { RandomListRepository } from 'Data/Repositories/RandomLists.repository';
import { RandomListService } from 'Core/Services/RandomList.service';
import { Scheduler } from 'Core/Adapters/Scheduler.adapter';
import { DailyMangaHandler } from 'Core/Jobs/DailyManga';
import { Randomizer } from 'Core/Adapters/ShufflerToRandomizer.adapter';
import { AuthController } from 'Web/Api/Controllers/Auth.controller';
import { TagRepository } from 'Data/Repositories/Tags.repository';
import { ListController } from 'Web/Api/Controllers/List.controller';
import { ListService } from 'Core/Services/List.service';
import { ListRepository } from 'Data/Repositories/List.repository';

export const container = Awilix.createContainer();

container.register({
  hasher: Awilix.asClass(ArgonToHasherAdapter).singleton(),
  randomizer: Awilix.asClass(Randomizer).singleton(),
  scheduler: Awilix.asClass(Scheduler).singleton(),
  dailyMangaHandler: Awilix.asClass(DailyMangaHandler).singleton(),
  authController: Awilix.asClass(AuthController).singleton(),
  authService: Awilix.asClass(AuthService).singleton(),
  mangaService: Awilix.asClass(MangaService).singleton(),
  mangaController: Awilix.asClass(MangaController).singleton(),
  mangaRepository: Awilix.asClass(MangaRepository).singleton(),
  userService: Awilix.asClass(UserService).singleton(),
  userController: Awilix.asClass(UserController).singleton(),
  usersRepository: Awilix.asClass(UsersRepository).singleton(),
  randomListController: Awilix.asClass(RandomListController).singleton(),
  randomListRepository: Awilix.asClass(RandomListRepository).singleton(),
  randomListService: Awilix.asClass(RandomListService).singleton(),
  tagRepository: Awilix.asClass(TagRepository).singleton(),
  listController: Awilix.asClass(ListController).singleton(),
  listService: Awilix.asClass(ListService).singleton(),
  listRepo: Awilix.asClass(ListRepository).singleton(),
});
