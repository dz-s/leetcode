/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const { BinaryHeap } = require('./data-structures/heap.js')

const mergeKLists = (lists) => {
    let heap = new BinaryHeap(function (x) { return x; })
    let head = null
    let currMin = Number.MIN_SAFE_INTEGER
    let tmp = head
    const len = lists.length
    let count = 0
    while (true) {
        for (let i = 0; i < len; i++) {

            if (lists[i]) {
                heap.push(lists[i].val)
                lists[i] = lists[i].next
            }
        }
        currMin = heap.pop()

        if (currMin === undefined) {
            break;
        }
        if (tmp === null) {
            head = new ListNode(currMin)
            tmp = head
        } else {
            tmp.next = new ListNode(currMin)
            tmp = tmp.next
        }

        count++
    }

    return head

};

const n = 1
let arr = []
let head = new ListNode(1)
let head1 = new ListNode(1)
let head2 = new ListNode(2)


let tmp = head
tmp.next = new ListNode(4)
tmp = tmp.next
tmp.next = new ListNode(5)


tmp = head1
tmp.next = new ListNode(3)
tmp = tmp.next
tmp.next = new ListNode(4)

tmp = head2
tmp.next = new ListNode(6)

arr.push(head)
arr.push(head1)
arr.push(head2)


console.log(JSON.stringify(mergeKLists(arr)))