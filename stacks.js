class Node {
 constructor(value) {
  this.value = value
  this.next = null
 }
}

class Stack {
 constructor() {
  /* Array
  this.array = [] */
  /* LinkedList
  this.top = null
  this.bottom = null
  this.length = 0*/
 }

 peek() {
  /* Array 
  return this.array[this.array.length - 1] */
  /* LinkedList
  return this.top */
 }

 push(value) {
  /* Array
  this.array.push(value)
  console.log(this); */
  /* LinkedList
  const newNode = new Node(value)
  if (this.length === 0) {
   this.top = newNode
   this.bottom = newNode
  } else {
   const holdingPointer = this.top
   this.top = newNode
   this.top.next = holdingPointer
  }
  this.length++
  console.log(this); */
 }

 pop() {
  /* Arrays
  this.array.pop()
  console.log(this); */
  /* LinkedList
  if (!this.top) return null
  if (this.top === this.bottom) this.bottom = null
  // const holdingPointer = this.top
  this.top = this.top.next 
  this.length--
  console.log(this); */

  }
 }


const myStack = new Stack()
myStack.push(5)
myStack.push(4)
myStack.push(3)
myStack.peek()
myStack.pop()
myStack.pop()
// myStack.pop()
