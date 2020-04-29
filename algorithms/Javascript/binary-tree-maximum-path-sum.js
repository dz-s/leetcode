/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 //by https://leetcode.com/austinchaozhang/
//Simple dfs
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var maxPathSum = function(root) {
    var maxValue = Number.MIN_SAFE_INTEGER;
    
    if(!root) return;
    
    function dfs(node) {
        var left, right;

        if (node === null){
            return 0;
        }

        left = Math.max(0, dfs(node.left));
        right = Math.max(0, dfs(node.right));

        maxValue = Math.max(maxValue, left + right + node.val);

        return Math.max(left, right) + node.val;
    } 
    
    dfs(root);
    
    return maxValue;
};