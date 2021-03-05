import UserModel from '../../../models/user';
import { AuthRepository } from './Auth.repository';
import { AuthService } from './Auth.service';
import { AuthController } from './Auth.controller';

// Exteran Libraries
import { randomBytes } from 'crypto';
import { ArgonToHasherAdapter } from './Adapters/ArgonToHasher.adapter';

// Its up to you how strict you want to be. This allows you to easily
// change between libraries without having to care what's happening
// in the implementation.
const hasher = new ArgonToHasherAdapter();

// We should also create an adapter for this bastard,
// be consistent.

// const bytesFn = new RandomBytesToBytesAdapter()

// Be aware we are "tightly" coupled to the implementation of mongoose right now.
// You can create yet another "port" (interface) to make sure you are decoupled
// But for this applications sake I think it's fine. Well for most it is, really.
export const authRepository = new AuthRepository(UserModel);
export const authService = new AuthService(authRepository, hasher, randomBytes);
export const authController = new AuthController(authService);

export default authController;
