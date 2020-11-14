var lowestCommonAncestor = function (root, p, q) {
    let pPath = getPath(root, p.val)
    let qPath = getPath(root, q.val)

    let LCA = null
    const len = Math.min(pPath.length, qPath.length)
    for (let i = 0; i < len; i++) {
        if (pPath[i] === qPath[i]) {
            LCA = pPath[i]
        } else {
            break
        }
    }
    return LCA
};


const getPath = (root, key) => {
    return getPathRecc(root, [], key)
}

const getPathRecc = (node, path, key) => {

    if (node === null) {
        return []
    }

    if (node.val === key) {
        return [...path, key]
    } else {
        let leftPath = getPathRecc(node.left, [...path, node.val], key)
        let rightPath = getPathRecc(node.right, [...path, node.val], key)
        return leftPath.length ? leftPath : rightPath
    }

}
