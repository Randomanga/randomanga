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

export const container = Awilix.createContainer();

container.register({
  hasher: Awilix.asClass(ArgonToHasherAdapter).singleton(),

  subscribersService: Awilix.asClass(SubscribersService).singleton(),
  authController: Awilix.asClass(AuthController).singleton(),
  usersRepository: Awilix.asClass(UsersRepository).singleton(),

  authService: Awilix.asClass(AuthService).singleton(),
  subscribersController: Awilix.asClass(SubscribersController).singleton(),
  subscribersRepository: Awilix.asClass(SubscribersRepository).singleton(),

  mangaService: Awilix.asClass(MangaService).singleton(),
  mangaController: Awilix.asClass(MangaController).singleton(),
  mangaRepository: Awilix.asClass(MangaRepository).singleton(),

  userService: Awilix.asClass(UserService).singleton(),
  userController: Awilix.asClass(UserController).singleton(),
});
