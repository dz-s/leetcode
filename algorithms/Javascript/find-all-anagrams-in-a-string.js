/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

class Counter {
    constructor(entries) {
        this._m = new Map(entries)
    }
    
    _deleteIfZero(key) {
        if (!this._m.get(key)) this._m.delete(key)
    }
    
    get size() {
        return this._m.size
    }
    
    inc(key, num = 1) {
        this._m.set(key, (this._m.get(key) || 0) + num)
        this._deleteIfZero(key)
    }
    
    dec(key, num = 1) {
        this._m.set(key, (this._m.get(key) || 0) - num)
        this._deleteIfZero(key)
    }
}

function findAnagrams(s, p) {
    let ans = []
    if (s.length < p.length) return ans
    let counter = new Counter()
    for (let c of p) counter.inc(c)
    for (let i = 0; i < p.length; i++) counter.dec(s[i])
    if (!counter.size) ans.push(0)
    for (let i = 1; i + p.length <= s.length; i++) {
        counter.inc(s[i - 1])
        counter.dec(s[i + p.length - 1])
        if (!counter.size) ans.push(i)
    }
    return ans
}