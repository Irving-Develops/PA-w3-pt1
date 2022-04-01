/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

Run tests on just this file by typing `npm test test/02-print-and-pause-spec.js`
on the command line.

***********************************************************************/
function printAndPause(nums) {
  if(nums.length === 0) return;
let currentDelay = nums.shift();
  setTimeout(


}

//console.log(printAndPause())
// function printAndPause(nums) {
  
  
//   setTimeout(()=>{
//     let currentDelay = nums.shift();
//     if(nums.length === 0 ) return;
//     console.log(currentDelay)
//   },currentDelay);
//   return printAndPause(nums);
  
// }
console.log(printAndPause([2000, 8000, 2000, 8000, 2000, 8000]));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}