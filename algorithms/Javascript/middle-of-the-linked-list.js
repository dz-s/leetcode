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

var search = function (ar, target) {
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = target - ar[k];
        if (cmp > 0) {
            m = k + 1;
        } else if(cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }
    return - 1;
};

const middleNode = (head) => {
    let tmp = head
    let arr = [];
    while (tmp !== null) {
        arr.push(tmp.val)
        tmp = tmp.next
    }
    const steps = arr.length % 2 ? (arr.length - 1) / 2 : arr.length / 2
    for (let i = 0; i < steps; i++) {
        head = head.next
    }
    return head
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
// tmp = tmp.next
// tmp.next = new ListNode(6)


console.log(search([-1, 0, 3, 5, 9, 12], 2))