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
 * @param {number[]} arr
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var isValidSequence = function (root, arr) {
    if (!root) return false;

    function dfs(node, arr, idx) {
        if (node === null || node.val !== arr[idx]) return false;

        if (idx === arr.length - 1) {
            return !node.left && !node.right
        }  
        return dfs(node.left, arr, idx + 1) || dfs(node.right, arr, idx + 1)
    }

    return dfs(root, arr, 0);
};
