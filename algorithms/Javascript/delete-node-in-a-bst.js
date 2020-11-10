var deleteNode = function (root, key) {
    if (root === null) {
        return null
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.right === null) {
            return root.left
        } else if (root.left === null) {
            return root.right
        }
        let minNode = findMin(root.right);
        root.val = minNode.val;
        root.right = deleteNode(root.right, root.val);
    }

    return root
};

const findMin = (node) => {
    let tmp = node
    while (tmp.left !== null) {
        tmp = tmp.left;
    }
    return tmp;
}