import express from 'express';
const Route = require('./routes/main');
import nunjucks from 'nunjucks';
import morgan from 'morgan';
const TeamModel = require('./models/team');
import bodyParser from 'body-parser';
import _ from 'lodash';

const PORT = 3000;
const server = express();

const buildUrl = (version, path) => `/api/${version}`;
const BASE_URL = buildUrl('v1');

server.use(morgan('tiny'));
server.use(bodyParser.json());

server.use(BASE_URL, Route);

nunjucks.configure('views', {
    autoescape: true,
    express: server
});

server.get('/teams', (req, res) => {
    TeamModel.find((err, teams) => {
        res.render('index.html', {test: teams});
    });
});


server.get('/route-handler', (req, res, next) => {
    res.send('is cool');
    next();
}, (req, res, next) => {
    console.log('second cool');
    next();
}, (req, res) => {
    console.log('third cool');
});

server.listen(3000, () => {
    console.log(`server started on port ${PORT}`);
});