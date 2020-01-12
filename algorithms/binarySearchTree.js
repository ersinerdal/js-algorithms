class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null || this.root === undefined) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node === null) return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      const aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  getRootNode() {
    return this.root;
  }
  search(node, data) {
    if (node === null) return null;
    else if (data < node.data) return this.search(node.left, data);
    else if (data > node.data) return this.search(node.right, data);
    else return node;
  }
}

const BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(6);
BST.insert(1);
BST.insert(2);
BST.insert(3);
BST.insert(4);
BST.insert(7);
BST.insert(8);
BST.insert(9);

const root = BST.getRootNode();

console.log(BST.search(root, 9));

// console.log(root);
// console.log("in order");
// BST.inorder(root);
// console.log("--------------");
// console.log("pre order");
// BST.preorder(root);
// console.log("--------------");
// console.log("post order");
// BST.postorder(root);
