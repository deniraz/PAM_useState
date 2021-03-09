import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

const volume = require('../App');
test('calculate volume 10 * 20 * 30', () => {
  expect(cekResult(10, 20, 30)).toBe(6000);
});