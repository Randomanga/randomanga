import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import manga from './routes/manga'
import agendash from './routes/agendash';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	auth(app);
	user(app);
	manga(app);
	agendash(app);

	return app
}