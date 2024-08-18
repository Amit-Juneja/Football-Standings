import dotenv from 'dotenv';
import express from 'express';
import { errorConverter, errorHandler } from './exceptions/error';
import healthRoute from './routes/health.route';

import { openApiValidator } from './middlewares';
import { apiDocsRouter, redocRouter, router } from './routes';
import constants from './utils/constants';

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', constants.ALLOWED_ORIGINS);
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', '*');
  if ('OPTIONS' === req.method) {
    res.status(200).send();
  } else {
    next();
  }
});

app.get('/robots.txt', (req, res) => res.sendStatus(204));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

// Parse request body as json
app.use(express.json());

// All the routes specified below this route will be validated by express-openapi-validator
app.use(openApiValidator);

app.use('/', healthRoute);
app.use('/redoc', redocRouter);
app.use('/api-docs', apiDocsRouter);

app.use('/', router);

app.use(errorConverter);
// handle error
app.use(errorHandler);

export default app;
