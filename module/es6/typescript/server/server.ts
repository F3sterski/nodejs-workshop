import * as express from 'express';
import {Request, Response} from 'express';
import * as bodyParser from 'body-parser';

const port: number = 3000;

const app: express.Application = express();
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}));

app.get('/', (req: Request, res: Response) => {
    res.end('Hello')
});

app.listen(port, (error) => {
    if (!error) {
        console.log('Serwer działa na porcie 3000');
    }
});

export default app;
