const React = require('react');
const renderer = require('react-test-renderer');
// import { AppPhotos } from '../client/src/components/index.jsx'
const { AppPhotos } = require('../client/src/components/index.jsx')


test('test that AppPhotos class has functions', () => {
  const AP = renderer.create( <AppPhotos/>)
  expect(<AppPhotos/>).toBe(<AppPhotos/>)
})