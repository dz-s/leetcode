/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
const swapPairs = (head) => {
    let headSwap = null
    let headSwapTmp = null
    let stack = []
    let count = 2
    let headTmp = head

    if (head) {
        while (headTmp !== null) {
            console.log('stack', stack)
            if (count > 0) {
                stack.push(headTmp.val)
                count--
            } else {
                if (headSwap === null) {

                    headSwap = new ListNode(stack.pop())
                    headSwapTmp = headSwap

                    headSwapTmp.next = new ListNode(stack.pop())
                    headSwapTmp = headSwapTmp.next
                    console.log('stack', stack)
                } else {
                    headSwapTmp.next = new ListNode(stack.pop())
                    headSwapTmp = headSwapTmp.next
                    headSwapTmp.next = new ListNode(stack.pop())
                    headSwapTmp = headSwapTmp.next
                }


                stack.push(headTmp.val)
                count = 1 // 2 - 1
            }

            headTmp = headTmp.next
        }

        //pop put the rest
        while (stack.length > 0) {

            if (headSwapTmp === null) {
                headSwap = new ListNode(stack.pop())
                headSwapTmp = headSwap
            } else {
                headSwapTmp.next = new ListNode(stack.pop())
                headSwapTmp = headSwapTmp.next
            }

        }

    }

    return headSwap
};

let head = new ListNode(1)
let tmp = head
tmp.next = new ListNode(2)
tmp = tmp.next
tmp.next = new ListNode(3)
tmp = tmp.next
tmp.next = new ListNode(4)
tmp = tmp.next
tmp.next = new ListNode(5)