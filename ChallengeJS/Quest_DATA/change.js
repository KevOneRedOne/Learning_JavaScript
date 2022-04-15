/*
const sourceObject = {
  num: 42,
  bool: true,
  str: "some text",
  log: console.log,
};
*/
// Key / value
// The key is a string and we associate it to a value, very much like variables

//get() allows to take a key and return the corresponding value from the sourceObjet
// function get(key) {
//   sourceObject[key];
// }

const get = (key) => sourceObject[key];

//set() is a function that takes a key and a value update the value for the corresponding property of the sourceObject and return the set value
function set(key, data) {
  sourceObject[key] = data;
  return data
}