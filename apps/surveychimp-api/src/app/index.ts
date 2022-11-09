import * as express from 'express';
import {  handleGlobalErrors } from '@surveychimp/surveychimp-lib';
import surveyRouter from './routes/surveyRouter';
import healthcheckRouter from './routes/healthcheckRouter';
const app = express();

//Required to parse json body
app.use(express.json());

//Routers
app.use(surveyRouter);
app.use(healthcheckRouter);

//Global error handler
app.use(handleGlobalErrors);


export default app;