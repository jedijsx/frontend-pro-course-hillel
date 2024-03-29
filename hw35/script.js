// JavaScript Tips

// Arrow Function

function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

// Array.from()

const str = "Hello!";
const arr = Array.from(str);
console.log(arr); //Output: ['H', 'e', 'l', 'l', 'o', '!']

// JSON.parse()

const jsonStr = '{"name": "John", "age": 25}';
const person3 = JSON.parse(jsonStr);
console.log(person3); // Output: {name: 'John', age: 25}

// Map() Function

const numbers8 = [1, 2, 3, 4];
const doubled8 = numbers8.map(num => num * 2);

console.log(numbers8); // Output: [1, 2, 3, 4]
console.log(doubled8); // Output: [2, 4, 6, 8]

// Remove Array Duplicates

const arrWithDuplicates = [1, 12, 2, 13, 4, 4, 13];
const arrWithoutDuplicates = [...new Set(arrWithDuplicates)];

console.log(arrWithoutDuplicates); // Output: [1, 12, 2, 13, 4]

// Swap values using Destructuring

let x = 7, y = 13;

[x, y] = [y, x];

console.log(x); // 13
