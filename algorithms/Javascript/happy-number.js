/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (_n) => {

    const squareDigitSum = (n) => {
        let sum = 0;
        while (n) {
            sum += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        return sum;
    }

    let num = _n;

    const seq = new Set()
    while (1) {
        num = squareDigitSum(num);
        if (num === 1)
            return true;
        if (seq.has(num))
            return false;
        seq.add(num)
    }

};

console.log(isHappy(18))