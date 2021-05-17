export function toLastNames(arr) {
  return arr.map(item => {
    var fullName = [item.firstName, item.lastName].join(' ');
    return fullName;
  });
};

// export function addValues(arr) {

//   var sum = arr.reduce(accumulator, currentValue);
//   return accumulator + currentValue;
// };

// export function addValues(arr) {
//   return arr.reduce(item => {
//     var sum = accumulator + currentValue;
//     return sum;
//   }

// export function addValues(arr) {
//   let sum = numbers.reduce(function (accumulator, current) {
//     return accumulator + current;
//   });


// let sum = [0, 1, 2, 3].reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// export function addValues(arr) {
//   let sum = numbers.reduce(accumulator, current) {
//     return accumulator + current;
//   });

// export function addValues(arr) {
//   let sum = arr.reduce(function(accumulator, current) {
//     return accumulator + current;
//   })}


// export function addValues(arr) {

//   const initialValue = 0;


//   const numbers = arr;


//   const reducer = (accumulator, item) => {
//     return accumulator + item;
//   };
// };