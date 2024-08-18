const cache = {};

const get = (key: string) => {
  return cache[key];
};

const set = (key: string, value: string) => {
  cache[key] = value;
};

module.exports = {
  get,
  set,
};
