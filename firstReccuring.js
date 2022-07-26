/* Google Question: Given an array of numbers return the first recurring number
 Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4] 
 It should return 2

 Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4] 
 It should return 1

 Given an array = [2, 1, 3, 4] 
 It should return undefined */

 const firstRecurring = (arr) => {
  let map = {}

  for (let i=0; i < arr.length; i++) {
    if (map[arr[i]]) {
     return arr[i]
    } else {
    map[arr[i]] = 1
   }
  } 
  return undefined
 }

console.log(firstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]));
