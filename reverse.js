/* Create a function that reverses a string:
'Hi My name is Andrei' should be:
'ierdnA si eman yM iH' */

function reverse(str) {
 // Check input
 if (!str || str.length < 2 || typeof str !== 'string') {
  return 'Please provide a string'
 }
 newstr = ''
 for (let i = str.length-1; i >= 0; i--) {
   newstr += str[i]
 }
 return newstr;
}

const reverse2 = (str) => {
 return str.split('').reverse().join('')
}

const reverse3 = str => [...str].reverse().join('');

console.log(reverse('Hi My name is Andrei'))
console.log(reverse2('Hi My name is Andrei'))
console.log(reverse3('Hi My name is Andrei'))