// Write two functions that finds the factorieal of any number. One should use recursive. the other should just use a for loop

function findFactorialIterative(number) {
 let answer = 1
 counter = number
 while (counter > 0) {
  answer *= counter
  --counter
 }
 return answer
}

// console.log(findFactorialIterative(5))

function findFactorialRecursive(number) {
 if (number === 2) return 2
 return number * findFactorialRecursive(number - 1)
 }

console.log(findFactorialRecursive(5))