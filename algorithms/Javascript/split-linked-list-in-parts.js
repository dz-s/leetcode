/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
    let len = 0
    let arr = []
    while (root.next != null) {
        len++
        arr.push(root.val)
        root = root.next
    }
    arr.push(root.val)
    const n = arr.length / k
    if (n === 0) {
        let res = []
        for (let i = 0; i < k; i++) {
            arr[i] ? res.push([arr[i]]) : res.push([])
        }
        return res
    } else {
        let res = []
        let temp = []
        let rest = arr.length - n * k
        for (let i = 0; i < k; i++) {

            if (temp.length == n) {
                if (rest) {
                    temp.push(i)
                    rest--
                    res.push(temp)
                    temp = []
                }
            } else {
                temp.push(i)
            }
        }
        return res
    }
};

console.log(splitListToParts)