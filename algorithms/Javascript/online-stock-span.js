
//by https://leetcode.com/ivschukin/

class StockSpanner {
    constructor() {
        this.s = [];
    }
    
    next(price) {
        let cnt = 1;
        
        while (this.s.length && this.s[this.s.length - 1][0] <= price) { 
            cnt += this.s.pop()[1];
        }
        
        this.s.push([price, cnt]);
        return cnt;
    }
} 