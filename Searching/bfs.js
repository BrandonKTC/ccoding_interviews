class Node {
 constructor(value) {
  this.left = null
  this.right = null
  this.value = value
 }
}

class BinarySearchTree {
 constructor() {
  this.root = null
 }

 insert(value) {
  const newNode = new Node(value)

  if (this.root === null ) this.root = newNode

  else {
   let currentNode = this.root
   while(true) {
    if (value < currentNode.value) {
     // Left
     if (!currentNode.left) {
      currentNode.left = newNode
      return this
     }
     currentNode = currentNode.left
    } else {
     // right
     if (!currentNode.right) {
     currentNode.right = newNode
     return this
     }
     currentNode = currentNode.right
    }
   }

  }

 }

 lookup(value) {
   const newNode = new Node(value)
   if (!this.root) return false

   let currentNode = this.root
   while(currentNode) {
    if (value < currentNode.value) {
     currentNode = currentNode.left
    } else if (value > currentNode.value) {
     currentNode = currentNode.right
    } else if (currentNode.value === value) {
     return currentNode
    }
   }
   return false
 }

 remove(value) {
  if (!this.root) return false

  let currentNode = this.root
  let parrentNode = null

  while(currentNode) {
   if (value < currentNode.value) {
    parrentNode = currentNode
    currentNode = currentNode.left
   } else if (value > currentNode.value) {
    parrentNode = currentNode
    currentNode = currentNode.right 
   } else if (currentNode.value === value) {
    //Option 1: No right child:
    if(currentNode.right === null) {
     if (parrentNode === null) {
      this.root = currentNode.left
     } else {
      if (currentNode.value < parrentNode.value) {
       parrentNode.left = currentNode.left
      } else if (currentNode.value > parrentNode.value) {
       parrentNode.right = currentNode.left
      }
     }
     // Option 2: Right child which doesnt have a left child
    } else if (currentNode.right.left === null) {

     if (parrentNode === null) {
      this.root = currentNode.left
     } else {
      currentNode.right.left = currentNode.left

      if (currentNode.value < parrentNode.value) {
       parrentNode.left = currentNode.right
      } else if (currentNode.value > parrentNode.value) {
       parrentNode.right = currentNode.right
      }
     }
     // Option 3: Right child that has a left child
    } else {
     // find the Right child's left most child
     let leftmost = currentNode.right.left
     let leftmostParent = currentNode.right
     while(leftmost.left !== null) {
      leftmostParent = leftmost
      leftmost = leftmost.left
     }

     // Parent's left subtree is now leftmost's right subtree
     leftmostParent.left = leftmost.right
     leftmost.left = currentNode.left
     leftmost.right = currentNode.right

     if (parrentNode === null) {
      this.root = leftmost
     } else {
      if (currentNode.value < parrentNode.value) {
       parrentNode.left = leftmost
      } else if (currentNode.value > parrentNode.value) {
       parrentNode.right = leftmost
      }
     }
    }
    return true
   }
  }
 }

 breadFirstSearch() {
  let currentNode = this.root
  let list = []
  let queue = []

  queue.push(currentNode)

  while (queue.length > 0) {
   currentNode = queue.shift()
   list.push(currentNode.value)

   if (currentNode.left) queue.push(currentNode.left)
   
   if (currentNode.right) queue.push(currentNode.right)
  }
  return list
 }

 breadFirstSearchR(queue=this.root, list=[]) {
  if (!queue.length) {
   return list
  }

  const currentNode = this.queue.shift()
  list.push(currentNode.value)
  if (currentNode.left) queue.push(currentNode.left)
  if (currentNode.right) queue.push(currentNode.right)

  return this.breadFirstSearchR(queue, list)
 }

 DFSInorder() {
  return traverseInOrder(this.root, [])
 }

 DFSPostorder() {
  return traversePostOrder(this.root, [])
 }

 DFSPreorder() {
  return traversePreOrder(this.root, [])
 }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(20)
tree.insert(4)
tree.insert(6)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.DFSInorder())
console.log(tree.DFSPreorder())
console.log(tree.DFSPostorder())
// tree.breadFirstSearchR()
// onsole.log(tree.remove(170))
// console.log(tree.lookup(9))


function traverse(node) {
 const tree = {value: node.value}
 tree.left = node.left === null ? null : traverse(node.left)
 tree.right = node.right === null ? null : traverse(node.right)
 return tree
}

function traverseInOrder(node, list) {
 if (node.left) traverseInOrder(node.left, list)
 
 list.push(node.value)

 if (node.right) traverseInOrder(node.right, list)
 return list
}

function traversePreOrder(node, list) {
 list.push(node.value)

 if (node.left) {
  traversePreOrder(node.left, list)
 }
 if (node.right) {
  traversePreOrder(node.right, list)
 }
  return list
}

function traversePostOrder(node, list) {
 // console.log(node);
 if (node.left) {
  traversePostOrder(node.left, list)
 }
 if (node.right) {
  traversePostOrder(node.right, list)
 }
 list.push(node.value)
 return list
}