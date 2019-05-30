package main

import (
	"fmt"
)

type ListNode struct {


	Val  int
	Next *ListNode
}
func	New() *ListNode {
	l := new(ListNode)
	l.Val = -1
	l.Next = nil
	return l 
}
func MakeList() *ListNode {
	l := new(ListNode)
	l.Val = 2
	l.Next = new(ListNode)
	l.Next.Val = 4
	l.Next.Next = new(ListNode)
	l.Next.Next.Val = 3
	return l
}
func MakeList2() *ListNode {
	l := new(ListNode)
	l.Val = 5
	l.Next = new(ListNode)
	l.Next.Val = 6
	l.Next.Next = new(ListNode)
	l.Next.Next.Val = 4
	return l
}
func main() {
	lA := MakeList()
	lB := MakeList2()
	lSum := new(ListNode)
	elSum := lSum

	// Iterate through list and print its contents.
	eA := lA
	eB := lB
	var rest int = 0
	for eA != nil && eB != nil {
		sum := eA.Val + eB.Val
		sumIntPart := sum / 10
		sumRest := sum % 10
		if sumIntPart == 0 {
			elSum.Val = sumRest + rest
			rest = 0
		} else {
			elSum.Val = sumRest + rest
			rest = 1
		}
		elSum.Next = new(ListNode)
		elSum = elSum.Next
		eA = eA.Next
		eB = eB.Next
	}

	if rest == 1 {
		elSum.Next = new(ListNode)
		elSum = elSum.Next
		elSum.Val = 1;
	}


	for lSum.Next != nil {
		fmt.Println(lSum.Val)
		lSum = lSum.Next
	}

}
