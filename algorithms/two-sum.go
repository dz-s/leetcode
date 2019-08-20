package main
	
import "sort"

func findIndex(a []int, x int, next bool) int {
	flag := next
    for i, n := range a {
        if x == n {
			if flag {
				flag = false
				continue
			}
			if !flag {
				return i
			} 
		} 
    }
    return len(a)
}

func twoSum(nums []int, target int) []int {
	sortedNums := make([]int, len(nums))
	copy(sortedNums, nums)
	sort.Ints(sortedNums)
	res := []int{0,0};
	count := len(sortedNums)
	sum := 0
	for i, j := 0, count-1; i < j; {
		sum = sortedNums[i] + sortedNums[j]
		if sum == target {
			res[0] = findIndex(nums, sortedNums[i], false)
			isEqual := sortedNums[j] == sortedNums[i]
			res[1] = findIndex(nums, sortedNums[j], isEqual)
			break;
		} else {
			if sum > target {
				j--
			} else {
				i++
			}
		}
	}
    return res;
}