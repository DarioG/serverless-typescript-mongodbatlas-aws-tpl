import * as Mongoose from 'mongoose';

const SUCCESS_MESSAGE = 'Connected to Database';
let isConnected = false;

export function connect() {
  if (isConnected) {
    return Promise.resolve(SUCCESS_MESSAGE);
  }

  return Mongoose.connect(process.env.DB)
    .then(() => {
      isConnected = true;
      return SUCCESS_MESSAGE;
    });
}
