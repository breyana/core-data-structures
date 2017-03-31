'use strict'

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(value) {
    let node = new TreeNode(value);
    let current = this.root

    if(this.root === null) {
      this.root = node;
      this.size++

    } else {
      while( current !== null ){
        if (node.value < current.value) {
          if (current.left === null) {
            current.left = node;
            this.size++;
            break
          } else {
            current = current.left
          }
        } else {
          if (current.right === null) {
            current.right = node;
            this.size++;
            break
          } else {
            current = current.right
          }
        }
      }
    }
  }

  search(value) {
    if (this.root === null) {
      return null
    }
    if (this.root.value === value) {
      return this.root
    }
    let current = this.root
    while (current) {
      if (current.value > value) {
        if (current.left === null) {
          return null
        } else if (current.left.value === value) {
         return current.left
        } else {
          current = current.left
        }
      } else if (current.value < value) {
        if (current.right === null) {
          return null
        } else if (current.right.value === value) {
          return current.right
        } else {
          current = current.right
        }
      }
    }
  }

  findParent(value) {
    if (this.root === null) {
      return null
    }
    if (this.root.value === value) {
      return this.root
    }
    let current = this.root
    while (current) {
      if (current.value > value) {
        if (current.left === null) {
          return null
        } else if (current.left.value === value) {
         return current
        } else {
          current = current.left
        }
      } else if (current.value < value) {
        if (current.right === null) {
          return null
        } else if (current.right.value === value) {
          return current
        } else {
          current = current.right
        }
      }
    }
  }

  remove(value) {
    if (this.root === null) {
      return
    }

    let parent = this.findParent(value)
    let toDelete = this.search(value)
    // find parent of value
    // find node that contains value
    // if that node's left child has a right subtree
    if (toDelete.left === null && toDelete.right === null) {
      if (parent.right.value === toDelete.value) {
        parent.right = null
      } else {
        parent.left = null
      }
    } else if (toDelete.left.right !== null) {
      //traverse to rightmost leaf
      let current = toDelete.left.right
      while (current.right != null) {
        current = current.right
      }
      //swap values of node and leaf
      parent.value = current.value
      parent.right = null
    // if that node's left child has no right subtree,
    } else if (toDelete.left.right === null) {
      // then node's right subtree becomes left child's right subtree
      toDelete.left.right = toDelete.right
      // parent points to left child
      parent.left = toDelete.left
    } else if (!toDelete.left){
      parent.right = toDelete.right.right
    }

    this.size--
  }

  traverse(func, node=this.root) {
    if(node !== null) {
      this.traverse(func, node.left);
      func(node.value)
      console.log(node.value);
      this.traverse(func, node.right)
    }
  }

  count() {
    return this.size
  }
}
