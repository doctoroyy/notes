/**
给定一棵二叉树, 输出从根节点到各个叶子节点组成的数字的和
如: 124 + 125 + 136 = 385
          1
    2           3
4      5     6
*/

// sum = sum * 10 + val;

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null,
  }
};

const preOrder = (root, sum) => {
  if (!root) {
    return 0;
  }

  sum = sum * 10 + root.val;

  if (!root.left && !root.right) {
    return sum;
  }

  return preOrder(root.left, sum) + preOrder(root.right, sum);
};

console.log(preOrder(root, 0));
