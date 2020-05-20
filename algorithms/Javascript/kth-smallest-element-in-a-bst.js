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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    return kthNode(root);
    
    function kthNode(node){
        if (!node) return null;
        
        let res = kthNode(node.left);
        if (k===0) return res;
        if ((--k) === 0) return node.val;
        return kthNode(node.right);
    }
};
