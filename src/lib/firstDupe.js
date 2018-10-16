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
    myMap.set(split[i], true);
  }
  return undefined;
};
