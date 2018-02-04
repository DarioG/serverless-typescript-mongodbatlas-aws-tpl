import { expect } from 'chai';
import * as Sinon from 'sinon';

import { Collection } from '../models/collection';
import * as Controller from './main';

describe('Controller', () => {
  describe('create()', () => {
    let modelCreateSpy: Sinon.SinonSpy;
    let transactionResult: any;

    before(() => {
      modelCreateSpy = Sinon.spy();

      const modelCreateStub = Sinon.stub(Collection, 'create')
        .callsFake((args: any) => {
          modelCreateSpy(args);

          return transactionResult;
        });
    });

    it('should create a new entry on the collection', () => {
      const requestBody = {};
      transactionResult = Promise.resolve();

      Controller.create(requestBody);

      expect(modelCreateSpy.alwaysCalledWithExactly(requestBody)).to.equal(true);
    });

    describe('when the entry was succesfuly created', () => {
      it('should return the entry information', () => {
        const expected = {
          body: JSON.stringify({
            property1: 'prop',
          }),
          statusCode: 200,
        };

        transactionResult = Promise.resolve({
          property1: 'prop',
        });

        return Controller.create({})
          .then((result: any) => {
            expect(result).eql(expected);
          });
      });
    });

    describe('when the entry was not succesfuly created', () => {
      it('should return the error', () => {
        const expected = {
          body: 'Request could not be created.',
          headers: { 'Content-Type': 'text/plain' },
          statusCode: 500,
        };

        transactionResult = Promise.reject({
          statusCode: 500,
        });

        return Controller.create({})
          .then((err: any) => {
            expect(err).eql(expected);
          });
      });
    });
  });
});
