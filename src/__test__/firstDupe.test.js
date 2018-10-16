'use strict';

const firstDupe = require('../lib/firstDupe');

describe('firstdupe.js', () => {
  test('happy path: input has duplicate words in it and spaces.', () => {
    expect(firstDupe('cat dog cat dog')).toEqual('cat');
  });
  test('unhappy path: no spaces.', () => {
    expect(firstDupe('catdogcatdog')).toEqual(undefined);
  });
  test('unhappy path: no dupes.', () => {
    expect(firstDupe('cat dog catdog')).toEqual(undefined);
  });
  test('unhappy path: not above 2 words', () => {
    expect(firstDupe('cat dog')).toEqual(undefined);
  });
  test('unhappy path: a lot of spaces', () => {
    expect(firstDupe('           ')).toEqual('');
  });
});
