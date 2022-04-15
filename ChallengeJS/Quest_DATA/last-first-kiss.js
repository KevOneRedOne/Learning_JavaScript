//function first takes an array or a string and return the first element
const first = (params) => params[0];
//function last takes an array or a string and return the last element
const last = (params) => params[params.length - 1];
//function kiss that returns an array of 2 elements the last and the first element, in that order
const kiss = (params) => {
  const firstelem = first(params);
  const lastelem = last(params);
  const order = [lastelem, firstelem];
  return order;
};
