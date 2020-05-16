/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    if(head === null){
        return head
    }
    
    if(head.next === null){
        return head
    }
   
    let ans = new ListNode(null)
    let tmp = ans
    let tmpHead = head
    
    while(tmpHead !== null){

        if(tmpHead.val < x ){
           if(tmp.val === null){
               tmp.val = tmpHead.val
           } else {
              tmp.next = new ListNode(tmpHead.val)
              tmp = tmp.next
           }
        }
        tmpHead = tmpHead.next
    }
    console.log(ans)
    while(head !== null){
        if(head.val >= x ){
           if(tmp.val === null){
               tmp.val = head.val
           } else {
                tmp.next = new ListNode(head.val)
                tmp = tmp.next   
           }
        }
        head = head.next
    }
    
    return ans
};