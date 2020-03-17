function solution1(A) { //Bulbs

    const up = []
    let lastOn = 0
    let res = 0
    const len = A.length

    for (let i = 0; i < len; i++) {
        lastOn = Math.max(lastOn, A[i])
        if(lastOn === i + 1){
            res++
        }
    }
    return res
}

console.log(solution1([2, 3, 4, 1, 5]))