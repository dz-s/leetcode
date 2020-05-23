/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    s.split("").forEach(char => {
        if(map.has(char)){
            map.set(char, map.get(char) + 1)
        }else {
            map.set(char, 1)
        }
        
    })
    
    map[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => {
            if(a[1] !==b[1]){
                return b[1] - a[1]
            } else {
                return -1
            }
        });
    }
    //console.log('map', map)
    let ans = ""
    let count = 0
    
    for (let [key, value] of map) { 

        while(count < map.get(key)){
            ans += key
            count++
        }
        count = 0
    }
    
    return ans
};