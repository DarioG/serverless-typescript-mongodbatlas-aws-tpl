import { expect } from 'chai';
import * as Mongoose from 'mongoose';
import * as Sinon from 'sinon';

import * as Database from './db';

describe('connectToDatabase()', () => {
  let dataBaseConnectStub: Sinon.SinonStub;
  let dataBaseConnectSpy: Sinon.SinonSpy;
  let result: string;

  before(() => {
    dataBaseConnectSpy = Sinon.spy();
    dataBaseConnectStub = Sinon.stub(Mongoose, 'connect')
      .callsFake((uri: string) => {
        dataBaseConnectSpy(uri);

        return Promise.resolve();
      });

    process.env.DB = 'http://myDBUri';

    return Database.connect()
      .then((msg: string) => {
        result = msg;
      });
  });

  after(() => {
    dataBaseConnectStub.restore();

    delete process.env.DB;
  });

  describe('when no connection is stablished', () => {
    it('should connect to databse', () => {
      const arg = dataBaseConnectSpy.getCall(0).args[0];
      expect(arg).to.equal(process.env.DB);
    });

    describe('when the connection has been stablished', () => {
      it('should resolve with a succesful message', () => {
        expect(result).to.equal('Connected to Database');
      });
    });
  });

  describe('when there is already a connection', () => {
    it('should not connect again', () => (
      Database.connect()
        .then((msg: string) => {
          expect(dataBaseConnectSpy.calledOnce).to.equal(true);
          expect(msg).to.equal('Connected to Database');
        })
    ));
  });
});
