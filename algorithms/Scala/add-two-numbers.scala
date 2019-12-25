/**
  * Definition for singly-linked list.
  * class ListNode(var _x: Int = 0) {
  *   var next: ListNode = null
  *   var x: Int = _x
  * }
  */
class ListNode(var _x: Int = 0) {
  var next: ListNode = null
  var x: Int         = _x

  override def toString(): String = {

    if (next != null) {
      return _x.toString + "->" + next.toString()
    } else {
      return _x.toString
    }

  }
}

object Solution {
  var resultList     = new ListNode()
  var link: ListNode = null
  var _l1: ListNode  = null
  var _l2: ListNode  = null
  var rest: Int      = 0
  var currVal: Int   = 0;
  var step           = 0;
  def addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = {

    _l1 = l1
    _l2 = l2
    while (_l1 != null) {

      currVal = _l1._x + _l2._x + rest

      if (currVal >= 10) {
        rest = currVal / 10
        currVal = currVal % 10
      } else {
        rest = 0
      }
      if (step == 0) {
        resultList._x = currVal
        if (_l1.next != null) {
          resultList.next = new ListNode()
          link = resultList.next
        }

      } else {
        link._x = currVal
        if (_l1.next != null) {
          link.next = new ListNode()
          link = link.next
        }
      }
      step = step + 1
      _l1 = _l1.next
      _l2 = _l2.next

    }

    return resultList

  }

  def main(args: Array[String]): Unit = {
    var l1 = new ListNode(2);
    l1.next = new ListNode(6)
    l1.next.next = new ListNode(3)
    var l2 = new ListNode(5);
    l2.next = new ListNode(6)
    l2.next.next = new ListNode(4)
    var res: ListNode = addTwoNumbers(l1, l2)
    println(res)
  }
}
