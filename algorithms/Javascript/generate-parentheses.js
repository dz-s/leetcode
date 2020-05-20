/**
 * @param {number} n
 * @return {string[]}
 */
var ans = []
const generateParenthesisRecc = (s, n, opened, closed) => {
  
    if(s.length === 2*n){
        ans.push(s)
        return
    }
    
    if(opened < n){
        generateParenthesisRecc(s+'(', n, opened+1, closed)
    }
        
    if(closed < opened){
        generateParenthesisRecc(s+')', n, opened, closed+1)  
    }

}
var generateParenthesis = function(n) {
    ans = [];
    generateParenthesisRecc('', n, 0, 0)
    
    return ans
    
};