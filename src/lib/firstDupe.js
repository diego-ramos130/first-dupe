'use strict';

module.exports = function firstDupe(string) {
  const split = string.split(' ');
  if (split.length < 2) {
    return undefined;
  }
  const myMap = new Map();
  for (let i = 0; i < split.length; i += 1) {
    if (myMap.get(split[i])) {
      return split[i];
    }
    myMap.set(split[i]);
  }
  return undefined;
};

firstDupe('cat dog cat dog');
firstDupe('no words duplicated so should return undefined');
firstDupe('');
firstDupe('onewordsoshouldreturnundefined');
