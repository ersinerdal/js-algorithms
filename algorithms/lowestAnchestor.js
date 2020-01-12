function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function lowestCommonAncestor(root, firstVal, secondVal) {
  const firstPath = path(root, firstVal);
  const secondPath = path(root, secondVal);
  if (firstPath == null || secondPath == null) {
    return null;
  }

  let i = 0;
  while (
    i < firstPath.length &&
    i < secondPath.length &&
    firstPath[i] === secondPath[i]
  )
    i++;

  return firstPath[i - 1].val;
}

function path(node, val) {
  if (node.val === val) {
    return [node];
  }

  const pathFromLeft = node.left ? path(node.left, val) : null;
  if (pathFromLeft) {
    return [node, ...pathFromLeft];
  }

  const pathFromRight = node.right ? path(node.right, val) : null;
  if (pathFromRight) {
    return [node, ...pathFromRight];
  }

  return null;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(6);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(8);
root.left.right.right.right = new TreeNode(9);

console.log(lowestCommonAncestor(root, 4, 9));

//path(root, 9);

//              1
//             / \
//            2   3
//           / \   \
//          4   5   6
//             / \
//            7   8
//                 \
//                  9
