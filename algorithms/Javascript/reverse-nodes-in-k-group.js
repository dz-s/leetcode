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
const reverseKGroup = (head, k) => {
    let headSwap = null
    let headSwapTmp = null
    let stack = []
    let count = k
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

                    for (let i = 1; i < k; i++) {
                        headSwapTmp.next = new ListNode(stack.pop())
                        headSwapTmp = headSwapTmp.next
                    }

                } else {
                    for (let i = 0; i < k; i++) {
                        headSwapTmp.next = new ListNode(stack.pop())
                        headSwapTmp = headSwapTmp.next
                    }

                }


                stack.push(headTmp.val)
                count = k - 1 // 2 - 1
            }

            headTmp = headTmp.next
        }
        const method = count === 0 ? 'pop' : 'shift'

        while (stack.length > 0) {

            if (headSwapTmp === null) {
                headSwap = new ListNode(stack[method]())
                headSwapTmp = headSwap
            } else {
                headSwapTmp.next = new ListNode(stack[method]())
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

console.log(JSON.stringify(reverseKGroup(head, 3)))