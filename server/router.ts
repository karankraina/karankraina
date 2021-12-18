import { Router } from 'express';

import { blog } from './routes/blog.routes';

const routes = Router();

routes.use('/blogs', blog);

export { routes };
