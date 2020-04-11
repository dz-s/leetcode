/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.arr = [];
    this.minVal = Number.MAX_VALUE;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {

    if (x !== undefined && x !== null) {
        if (x < this.minVal) {
            this.minVal = x
        }
        this.arr.push({ val: x, min: this.minVal })
    }
    console.log('push', this.arr.map(el => el.val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {

    if (this.arr.length === 1) {
        this.minVal = Number.MAX_VALUE;
    }
    if (this.arr[this.arr.length - 1].val === this.minVal) {
        this.minVal = this.arr[this.arr.length - 1].min;
        this.arr.pop()
    } else {
        this.arr.pop()
    }
    console.log('pop', this.arr.map(el => el.val))

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    console.log('top', this.arr.map(el => el.val))
    return this.arr[this.arr.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    console.log('getMin', this.arr.map(el => el.val))
    return this.arr[this.arr.length - 1].min
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */