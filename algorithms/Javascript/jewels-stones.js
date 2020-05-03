//by https://leetcode.com/zengxinxin/
var numJewelsInStones = function(J, S) {
    var count = 0;
    if (J.length > 0 && S.length > 0) {
        for (let i = 0; i < J.length; ++i) {
            var regex = new RegExp(J[i], 'g'); 
            var result = S.match(regex);
            if (result) {
                count += result.length;
            }
        }
    }
    
    return count;
};