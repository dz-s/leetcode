/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const search =  (ar, target) => {
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
    
};