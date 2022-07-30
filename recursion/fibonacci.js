// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

const fibonacciRecursive = (n) => {
  if (n < 2) return n
   return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)

 }
 

// console.log(fibonacciRecursive(8))

const fibonacciIterative = (n) => {
 let counter = 0
 let arr = []
 while (arr.length <= n) {
  if (arr.length < 2) {
   arr.push(counter)
   counter++
   } else {
    counter = arr[arr.length-1] + arr[arr.length-2]
  }
  arr.push(counter)
 }
 return arr[n]
}

 console.log(fibonacciIterative(0));