import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}));

app.get('/', (req,res) => {
    res.end('Hello')
});

app.listen(3000, (error) => {
    if (!error) {
        console.log('Serwer działa na porcie 3000');
    }
});

export default app;
