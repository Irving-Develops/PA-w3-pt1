/***********************************************************************
Write a function called `eliminateType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept a string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with all elements
of the specified type removed.

Examples:



Hint: Remember Polya's problem solving framework!

1. Understand the problem
* Read the problem carefully
* Make sure you understand the examples
* What should the returned function do?
* Is this similar to any problems you have solved before?

2. Come up with a plan
* Break this down into simpler steps
* How would you write a function that eliminates all numbers from an array?
* How would you write a function that eliminates all strings from an array?
* How would you write a function that eliminates all booleans from an array?
* How would you write a function that takes an array and a type and removes all values of the given type?
* How do you write a function that returns a function?

3. Execute the plan
* It may help to implement the intermediate steps from your plan first
* It may help to try a brute-force solution first

4. Reflect, debug, test, refactor
* If your tests aren't passing try coming up with your own test inputs
* If your brute-force solution passess tests, try refactoring for simplicity
* It's possible (not mandatory) to solve this in 1-3 lines of code!


Run tests on just this file by typing `npm test test/01-eliminate-type-spec.js`
on the command line.

***********************************************************************/
//create a helper function that removes all strings from an array

// const stringRemover = arr => {
//   let newArr = [];
//   arr.filter(el=>{
//     if(typeof(el) !== 'string') newArr.push(el);
//   })
//   return newArr;
// }

// console.log(stringRemover(['hello', 7 , 9 , 'hi']));
function eliminateType(arr) {
  // Your code here
  //declare an empty array
  const filteredArr = [];
  //since this returns a function, it will be a closure
  return (dataType) => {
    let newArr = arr.slice();
    //we want to iterate through the array
    newArr.filter((el, i) => {
      //if the currents element typeof matches the current element we want to remove it from the array
      if(typeof(el) === dataType){
        let filteredArr = [...newArr.splice(i,1)];
        //console.log(filteredArr);
        
      }
    })
    return newArr;
  }
}
// const smallEliminate = eliminateType([1, 'one', 2, 'two', 3, 'three']);
// //console.log(smallEliminate('string')); // [1, 2, 3]
// console.log(smallEliminate('number')); // ['one', 'two', 'three']

const eliminate = eliminateType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(eliminate('number')); // [undefined, 'world', { color: 'red' }, true, [4, 5], 'hello', false]
//console.log(eliminate('object')); // [2, undefined, 'world', true, 3, 'hello', false]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = eliminateType;
} catch {
  module.exports = null;
}