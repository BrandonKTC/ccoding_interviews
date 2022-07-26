class MyArray {
 constructor() {
  this.length = 0;
  this.data = {}
 }

 get(index) {
  return this.data[index]
 }

 push(item) {
  this.data[this.length] = item;
  this.length++;
  return this.length;
 }

 pop() {
  const lastItem = this.data[this.LENGTH - 1];
  delete this.data[this.length - 1];
  this.length--;
  return item;
 }
}

const newArray = new MyArray();
newArray.push('hi')
console.log(newArray.get(0));