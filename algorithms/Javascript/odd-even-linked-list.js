/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//by https://leetcode.com/valaamm/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var oddEvenList = function (head) {
    if (!head || !head.next) {
        return head;
    };
    let odd = head,
        even = head.next,
        cur = even;
        
    while (cur && cur.next) {
        odd.next = cur.next;
        odd = odd.next;
        cur.next = cur.next.next;
        cur = cur.next;

    };

    odd.next = even;
    return head;
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


console.log(oddEvenList(head))
