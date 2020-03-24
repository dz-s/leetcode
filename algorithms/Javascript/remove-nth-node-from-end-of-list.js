/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}


const removeNthFromEnd = (head, n) => {
    let stack = []
    let headTmp = head
    if (head) {
        while (headTmp !== null) {
            stack.push(headTmp.val)
            headTmp = headTmp.next
        }
        if(stack.length <= n){
            return null
        }
        stack.splice(stack.length - n, 1);
        const len = stack.length
        let headRes = new ListNode(stack[0])
        let tmp = headRes
        for (let i = 1; i < len; i++) {
            tmp.next = new ListNode(stack[i])
            tmp = tmp.next
        }

        return headRes
    }
};
const n = 1
let head = new ListNode(1)
// let tmp = head
// tmp.next = new ListNode(2)
// tmp = tmp.next
// tmp.next = new ListNode(3)
// tmp = tmp.next
// tmp.next = new ListNode(4)
// tmp = tmp.next
// tmp.next = new ListNode(5)

console.log(JSON.stringify(removeNthFromEnd(head, n)))