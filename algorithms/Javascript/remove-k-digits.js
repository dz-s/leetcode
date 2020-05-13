var removeKdigits = function(num, k) {
    if (num.length <= k) return "0"
    let output = [];
    let i = 0;
    while (i < num.length) {
        while (output.length > 0 && k > 0 && output[output.length-1] > num.charAt(i)) {
            output.pop();
            k--;
        }
        if (!(num.charAt(i) === "0" && output.length === 0)) output.push(num.charAt(i))
        i++
    }
    for (let i = 0; i < k; i++) output.pop();
    return output.length > 0 ? output.join("") : "0"
};