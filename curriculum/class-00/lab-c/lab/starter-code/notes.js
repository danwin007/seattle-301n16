// notes for code challenge lab D

// challenge 1

const greeting = (word) => {
  return word.toUpperCase();
};

const speaker = (message, callback) => {
  return callback(message);
};

// speaker('hello 301 students!', greeting)

// challenge 2

const addValues = (arr, value) => {
  arr.push(value);
};

const addNumbers = (num, arr, times, callback) => {
  for(let i = 0; i < times; i++) {
    callback(arr, num);
  }
  return arr;
};

