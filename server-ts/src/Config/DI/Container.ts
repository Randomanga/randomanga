import { MangaController } from './../../Web/Api/Controllers/Manga.controller';
import { MangaRepository } from './../../Data/Repositories/Mangas.repository';
import { MangaService } from './../../Core/Services/Manga.service';
import * as Awilix from 'awilix';

import { UsersRepository } from 'Data/Repositories/Users.repository';
import { SubscribersRepository } from 'Data/Repositories/Subscribers.repository';
import { SubscribersController } from 'Web/Api/Controllers/Subscribers.controller';
import { SubscribersService } from 'Core/Services/Subscribers.service';
import { AuthService } from 'Core/Services/Auth.service';
import { AuthController } from 'Web/Api/Controllers/Auth.controller';
import { ArgonToHasherAdapter } from 'Core/Adapters/ArgonToHasher.adapter';
import { UserService } from 'Core/Services/User.service';
import { UserController } from 'Web/Api/Controllers/User.controller';
import { RandomListController } from 'Web/Api/Controllers/RandomList.controller';
import { RandomListRepository } from 'Data/Repositories/RandomLists.repository';
import { RandomListService } from 'Core/Services/RandomList.service';
import { ShufflerToRandomizerAdapter } from 'Core/Adapters/ShufflerToRandomizer.adapter';

export const container = Awilix.createContainer();

container.register({
  hasher: Awilix.asClass(ArgonToHasherAdapter).singleton(),
  randomizer: Awilix.asClass(ShufflerToRandomizerAdapter).singleton(),

  //testing stuff
  subscribersService: Awilix.asClass(SubscribersService).singleton(),
  subscribersController: Awilix.asClass(SubscribersController).singleton(),
  subscribersRepository: Awilix.asClass(SubscribersRepository).singleton(),

  
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
});
