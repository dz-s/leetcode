/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var widthOfBinaryTree = function(root) {
    if (!root) return [];

    const res = [];
    const q = [];
    q.push(root);

    while(q.length) {
      const lvl = [];
      const size = q.length;

      for (let i = 0; i < size; i++) {
        const node = q.shift();
        if (node) {
            lvl.push(node.val);
            if(node.left || node.right){
                q.push(node.left);
                q.push(node.right);
            }

        }else{
            lvl.push(null);
        }
    
      }
      res.push(lvl);
    }
  console.log('res', res)
  let lens = res.map(el => el.length);
    return Math.max(...lens);
};