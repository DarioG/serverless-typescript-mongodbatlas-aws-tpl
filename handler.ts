import * as dotenv from 'dotenv';

import * as Controller from './src/controllers/main';
import * as Database from './src/db';

dotenv.config({
  path: './variables.env',
});

export function create(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  Database.connect()
    .then(() => Controller.create(JSON.parse(event.body)))
    .then((result) => {
      callback(null, result);
    });
}
