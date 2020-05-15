//by https://leetcode.com/rdabbir/
var maxSubarraySumCircular = function(a) {
    let aCopy = [...a];
    let n = a.length;
    let max_sum = kadane(a); // sliding window using kadane's algo

    let max_wrap = 0;

    for (let i = 0; i < n; i++) { 
        max_wrap += a[i]; // Calculate array-sum 
        a[i] = -a[i];  // invert the array (change sign) 
    } 

    max_wrap = max_wrap + kadane(a); 
    return (max_wrap > max_sum)? max_wrap: max_sum==0? max_sum = Math.max.apply(this, aCopy): max_sum; 

    // Sliding window
    function kadane (a) { 
        let n = a.length; 
        let max_so_far = 0, max_ending_here = 0; 
        for (let i = 0; i < n; i++) 
        { 
            max_ending_here = max_ending_here + a[i]; 
            if (max_ending_here < 0) 
                max_ending_here = 0; 
            if (max_so_far < max_ending_here) 
                max_so_far = max_ending_here; 
        } 
        return max_so_far; 
    } 
};
