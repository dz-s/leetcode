var generateMatrix = function(n) {
    const M = [];
    for (let i = 0; i < n; ++i) M[i] = [];
    let r0 = 0, r1 = n - 1, c0 = 0, c1 = n - 1;
    let x = 1;
    while (r0 <= r1 && c0 <= c1) {
        for (let c = c0; c <= c1; ++c) M[r0][c] = x++;
        ++r0;
        for (let r = r0; r <= r1; ++r) M[r][c1] = x++;
        --c1;
        for (let c = c1; c >= c0; --c) M[r1][c] = x++;
        --r1;
        for (let r = r1; r >= r0; --r) M[r][c0] = x++;
        ++c0;
    }
    return M;
};