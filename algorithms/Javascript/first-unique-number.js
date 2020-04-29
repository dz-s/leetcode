/**
 * @param {number[]} nums
 */

Array.prototype.remove = function (val) {
    const index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
    return this;
}

var FirstUnique = function (nums) {
    this.set = new Set()
    this.dll = []
    this.firstUnique = -1
    nums.forEach(num => {
        this.add(num)
    })
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
    console.log(this.firstUnique)
    return this.firstUnique
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
    if (!this.set.has(value)) {
        this.set.add(value)
        this.dll.push(value)
        if (this.firstUnique === -1) {
            this.firstUnique = value
        }
    } else {
        this.dll.remove(value)
        this.firstUnique = this.dll[0] || -1
    }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

// firstUnique = new FirstUnique([2, 3, 5]);
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(5);            // the queue is now [2,3,5,5]
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(2);            // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // return -1

firstUnique = new FirstUnique([809]);
firstUnique.showFirstUnique(); // return 809
firstUnique.add(809);          // the queue is now [809,809]
firstUnique.showFirstUnique(); // return -1