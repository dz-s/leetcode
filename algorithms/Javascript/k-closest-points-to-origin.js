/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let answer = []
    let mapDist = new Map()
    
    for(let i = points.length - 1; i >= 0; i-- ){
        mapDist.set(i, points[i][0]*points[i][0] + points[i][1]*points[i][1])
    }
    console.log(mapDist)
    mapDist[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }
    
    let count = K;
    
    for (let [key, value] of mapDist) { 
        if(count ===0){
            break
        }
       answer.push(points[key])
        count--
    }
    return answer
};