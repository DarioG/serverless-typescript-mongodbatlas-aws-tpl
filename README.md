# Serverles + MongoDB Atlas + typescript + AWS starter kit

Just clone this project and start writing your serverless functions

## Requirements

* Node.js (>= 7.3.0)
* [Serverless](https://serverless.com/framework/docs/getting-started/)
* Project dependencies (`npm install`)

## Install

1. Clode/fork this repo
2. Create an [Amazon Web Services account](https://aws.amazon.com/console/) if you do now have one
3. Sign up for a [MongoDB Atlas](https://cloud.mongodb.com/user#/cloud/register/accountProfile) account if you do not have one, and create a [cluster](https://docs.atlas.mongodb.com/create-new-cluster/)
4. Once you have your MongoDB Atlas cluster running, copy the *URI Connection String* and paste into `variables.env.sample`
5. Rename this file to `variables.env`
6. npm install

## Running locally

* `serverless offline start` or `npm run start` -> Compile typescript files, run serverless offline and start watch

## Deploy

* `serverless deploy -v` -> Deploy all the functions to AWS lambda

### Run tests

* `npm run test` -> Run mocha