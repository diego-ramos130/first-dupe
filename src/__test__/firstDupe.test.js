'use strict';

import firstDupe from '../lib/firstDupe';

describe('firstdupe.js', () => {
  test('happy path: input has duplicate words in it and spaces.', () => {
    expect(firstDupe('cat dog cat dog')).toEqual('cat');
  })
});
