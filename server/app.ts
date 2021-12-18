// import reflect-metadata shim
import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Express, Request, Response } from 'express';
import * as path from 'path';

import { routes } from './router';

const app: Express = express();

app.use(express.static(path.join(__dirname, '../client/')));
app.use(bodyParser.json());

app.use('/api', routes);

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
})

export default app;