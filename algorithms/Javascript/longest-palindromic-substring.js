/* Fromn: https://leetcode.com/problems/longest-palindromic-substring/discuss/298340/JavaScript-56ms */

const longestPalindrome = (str) => {
    if (isStrPal(str)) return str;

    const s = [null];
    for (let i = 0; i < str.length; i++) {
        s.push(str[i], null);
    }
    const n = s.length;
    let maxRad = 1;
    let maxRadCenter = 0;

    let j = 0;
    let rightBorder = n - maxRad;
    for (let i = maxRad; i < rightBorder; i++) {
        if (s[i - maxRad] !== s[i + maxRad]) continue;

        if (isPal(s, i, maxRad - 1)) { // -1: we already checked for maxRad, let's check inside
            maxRad++;
            maxRadCenter = i;

            while (s[i - maxRad] === s[i + maxRad]) {
                maxRad++;
            }
            rightBorder = n - maxRad;
        }
    }

    let res = '';
    const start = maxRadCenter - maxRad + 2;
    const end = maxRadCenter + maxRad - 2;
    for (let i = start; i <= end; i += 2) {
        res += s[i];
    }
    return res;
};

function isPal(s, center, rad) {
    for (let l = center - rad, r = center + rad; l < r; l++ , r--) {
        if (s[l] !== s[r]) {
            return false;
        }
    }
    return true;
}

function isStrPal(s) {
    for (let l = 0, r = s.length - 1; l < r; l++ , r--) {
        if (s[l] !== s[r]) {
            return false;
        }
    }
    return true;
}

console.log(longestPalindrome("babadada"))