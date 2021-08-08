import { container } from 'Config/DI/Container';

export const authController = container.resolve('authController');
export const mangaController = container.resolve('mangaController');
export const usercontroller = container.resolve('userController');
export const randomListController = container.resolve('randomListController');
export const listController = container.resolve('listController');
