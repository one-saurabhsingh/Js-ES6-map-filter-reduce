var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array



// function double(x){
//     return x*2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

// var newNumbers = [];


// numbers.forEach(function double(x){
//     newNumbers.push(x*2);
// });

// CAN BE MADE ALOT EASY BY MAP.

const newNumbers = numbers.map(function(x) {
         return x*2;
});
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
