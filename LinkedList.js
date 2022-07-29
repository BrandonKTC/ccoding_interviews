class Node {
 constructor(value) {
  this.value = value
  this.next = null
//   this.prev = null
 }
}

class LinkedList {
   constructor(value) {
	this.head = {
	value: value,
	next: null,
	// prev: null
	}

	this.tail = this.head;
	this.length = 1;
	}

  append(value) {
   const newNode = new Node(value)
//    newNode.prev = this.tail
   this.tail.next = newNode;
   this.tail = newNode
   this.length++;
//    return this.tail
   return this.printList()
  }

	printList() {
	 const array = []
	 let currentNode = this.head
	 while (currentNode !== null) {
		array.push(currentNode.value)
		currentNode = currentNode.next
		}
	 return array
	}

	prepend(value) {
	const newNode = new Node(value)
	newNode.next = this.head
	// this.head.prev = newNode
	this.head = newNode
	this.length++
	return this.printList()
	}

	insert(index, value) {
		if (index > this.length) return this.append(value)

		const newNode = new Node(value)
		let leader = this.traverseToIndex(index - 1)
		let follower = leader.next
		leader.next = newNode
		// newNode.prev = leader
		newNode.next = follower
		// follower.prev = newNode
		this.length++;
		console.log(this);
		return this.printList()
	}

	remove(index) {
		const leader = this.traverseToIndex(index - 1)
		const unwantedNode = leader.next
		leader.next = unwantedNode.next
		// leader.prev = unwantedNode.prev
		this.length--
		console.log(this);
		return this.printList()

	}

	reverse() {
		if (!this.head.next) return this.head

		let first = this.head
		this.tail = this.head
		let second = first.next
		while (second) {
			const temp = second.next
			console.log("temp: \n",temp);
			second.next = first
			first = second
			console.log("first: \n",first);
			second = temp
			console.log("second: \n",second);
		}
		this.head.next = null
		this.head = first
		return this.printList()
	}

	traverseToIndex(index) {
		let count = 0
		let currentNode = this.head
		while (count !== index ) {
			currentNode = currentNode.next
			count++
		}
		return currentNode
	}
}


const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList.insert(2, 99))
// console.log(myLinkedList.remove(4))
console.log(myLinkedList.reverse())
