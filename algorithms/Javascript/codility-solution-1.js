
function solution1(A) {
    //const sorted = A.sort()
    let K = 0
    const set = new Set()
    const len = A.length
    for (let i = 0; i < len; i++) {
        if (A[i] > 0) {
            set.add(A[i])
        }
    }
    for (let i = 0; i < len; i++) {
        if (A[i] < 0) {
            if (set.has(-(A[i])) && -A[i] > K) {
                K = -A[i]
            }
        }
    }

    return K
}

function solution3(N) {

    const digit = '5'
    const isNegative = N >= 0 ? false : true
    let numArr = Math.abs(N).toString().split('')
    const len = numArr.length;
    let resNum = ''

    for (let i = 0; i < len; i++) {
        if (isNegative ? digit < numArr[i] : digit > numArr[i]) {
            resNum = resNum + digit + numArr.slice(i, len).join('')
            break
        } else {
            resNum += numArr[i]
        }

    }
    const absRes = parseInt(resNum)
    return isNegative ? -absRes : absRes
}


console.log(solution3(268))
console.log(solution3(670))
console.log(solution3(0))
console.log(solution3(-8000))
console.log(solution3(8000))