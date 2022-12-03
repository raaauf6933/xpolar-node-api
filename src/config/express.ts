import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import vars from './vars';
import routes from '../api/routes';

const app = express();

// request logging. dev: console | production: file
app.use(morgan(vars.logs));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// v1 api routes
app.use('/v1', routes);

export default app;
