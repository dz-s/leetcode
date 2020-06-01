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
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if(root && (root.left || root.right)){
        if(root.left && root.right){
            let tmp = null
            tmp = root.left
            root.left = root.right
            root.right = tmp
            
            invertTree(root.left)
            invertTree(root.right)

        } else if(root.left === null){
            root.left = invertTree(root.right)
            root.right = null
        } else {
            root.right = invertTree(root.left)
            root.left = null
        }
        

    }
    
    return root
    
};
