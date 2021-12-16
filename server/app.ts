import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as path from 'path';

const app: Express = express();

app.use(express.static(path.join(__dirname, '../client/')));

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
})

export default app;