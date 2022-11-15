import * as express from 'express';
import {  handleGlobalErrors } from '@surveychimp/surveychimp-lib';
import surveyRouter from './routes/surveyRouter';
import healthcheckRouter from './routes/healthcheckRouter';
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

const app = express();
Sentry.init({
    dsn: "https://d37b121a3b3b42699798f28044028bb2@o4504162132295680.ingest.sentry.io/4504162143240192",
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true }),
      // enable Express.js middleware tracing
      new Tracing.Integrations.Express({ app }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
//Required to parse json body
app.use(express.json());
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());
//Routers
app.use(surveyRouter);
app.use(healthcheckRouter);

app.use(Sentry.Handlers.errorHandler());
//Global error handler
app.use(handleGlobalErrors);

// Optional fallthrough error handler
// app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
//     res.statusCode = 500;
//     res.end(res.sentry + "\n");
//   });


export default app;