
import React from 'react';
import renderer from 'react-test-renderer';
import {info, photos, gather, capitalize} from '../../client/src/store.js';


describe('Store should handle raw data from server and return useable form', () => {
  test('Info and Photos should exist and have correct types', () => {
    expect(typeof info).toEqual('object');
    expect(typeof photos).toEqual('object');
  })

})