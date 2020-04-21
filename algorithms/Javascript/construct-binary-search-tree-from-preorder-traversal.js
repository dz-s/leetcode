/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var preIndex = 0
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const constructTree = (preorder, min, max, size) => {
    //console.log('min max val', min, max, preIndex)
    let root = null
    if (preIndex < size) {
        if (preorder[preIndex] < max && preorder[preIndex] > min) {
            root = new TreeNode(preorder[preIndex])
            preIndex++

            root.left = constructTree(preorder,
                min, root.val, size)

            root.right = constructTree(preorder,
                root.val, max, size)

        }
    }

    return root

}
const bstFromPreorder = (preorder) => {
    let min = Number.MIN_VALUE
    let max = Number.MAX_VALUE
    size = preorder.length
    return constructTree(preorder, min, max, size)
};


console.log(bstFromPreorder([1]))