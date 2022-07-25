// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//----------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

containsCommonItems = (arr1, arr2) => {

 let map = {};
 for (let i=0; i < arr1.length; i++) {
  if (!map[arr1[i]]) {
   const item = arr1[i]
   map[item] = true;
  }
 }

 for (let j=0; j< arr2.length; j++) {
  if (map[arr2[j]]) {
   return true
  }
 }

 return false
 
 // for (let i = 0; i < arr1.length; i++) {
 //   if (arr2.includes(arr1[i])) {
 //    return true
 //   } 
 // }
 // return false

}

console.log(containsCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'x']))