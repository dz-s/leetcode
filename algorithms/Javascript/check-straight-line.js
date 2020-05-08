/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
//by https://leetcode.com/saurabh1294/
var checkStraightLine = function(coordinates) {
    var slope = calcSlope(coordinates[0], coordinates[1])
    
    for (var i = 1; i < coordinates.length-1; i++) {
        var currSlope = calcSlope(coordinates[i], coordinates[i+1]);
        if (currSlope !== slope)
            return false;
        slope = currSlope;
    }
    
    return true;
};

var calcSlope = (p1, p2) => (p2[1]-p1[1])/(p2[0]-p1[0]);
