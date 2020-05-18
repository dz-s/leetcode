/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
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
var checkInclusion = function (s1, s2) {
    const len1 = s1.length
    const len2 = s2.length
    if (len2 < len1) {
        return false
    }
    let counter = new Counter()
    for (let c of s1) {
        counter.inc(c)
    }


    for (let i = 0; i < len1; i++) {
        counter.dec(s2[i])
    }

    if (!counter.size) {
        return true
    }
    for (let i = 1; i + len1 <= len2; i++) {
        counter.inc(s2[i - 1])
        counter.dec(s2[i + len1 - 1])
        if (!counter.size) {
            return true
        }
    }

    return false

};

console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("ab", "eidboaoo"))