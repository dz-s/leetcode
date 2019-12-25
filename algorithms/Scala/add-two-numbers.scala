/**
  * Definition for singly-linked list.
  * class ListNode(var _x: Int = 0) {
  *   var next: ListNode = null
  *   var x: Int = _x
  * }
  */
class ListNode(var _x: Int = 0) {
  var next: ListNode = null
  var x: Int = _x

  override def toString(): String = {
    return _x.toString()
  }
}

object Solution {
  var resultList = new ListNode()
  var link: ListNode = null
  var _l1: ListNode = null
  var _l2: ListNode = null
  var rest: Int = 0
  var currVal: Int = 0;
  var step = 0;
  def addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = {
    _l1 = l1
    _l2 = l2
    while (_l1.next != null) {
      currVal = _l1._x + _l2._x + rest
      if (currVal >= 10) {
        rest = currVal % 10
        currVal = 0
      } else {
        rest = 0
      }
      if (step == 0) {
        resultList.next = new ListNode(currVal)
        link = resultList.next
      } else {
        link.next = new ListNode(currVal)
        link = link.next
      }
      step = step + 1
      _l1 = _l1.next
      _l2 = _l2.next
    }

    return resultList
  }

  def main(args: Array[String]): Unit = {
    var l1 = new ListNode(2);
    l1.next = new ListNode(4)
    l1.next.next = new ListNode(3)
    var l2 = new ListNode(5);
    l2.next = new ListNode(6)
    l2.next.next = new ListNode(4)
    var res: ListNode = addTwoNumbers(l1, l2)
    println(res.next)
    println(res.next.next)
    println(res.next.next.next)
  }
}
