/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
//by https://leetcode.com/ariellyrycs/
let isvalid = function (image, sc, sr, color) {
    return 0 <= sc && sc < image.length && 0 <= sr && sr < image[0].length && image[sc][sr] === color;
};

let fillFourDirectional = function (image, sc,  sr, oldColor, newColor) {
    if(!isvalid(image, sc, sr, oldColor)) return;
    image[sc][sr] = newColor;
    fillFourDirectional(image, sc - 1, sr, oldColor, newColor);
    fillFourDirectional(image, sc, sr + 1, oldColor, newColor);
    fillFourDirectional(image, sc + 1, sr, oldColor, newColor);
    fillFourDirectional(image, sc, sr - 1, oldColor, newColor);
};

var floodFill = function(image, sc, sr, newColor) {
    if(image.length > 0 && image[0].length > 0 && image[sc][sr] !== newColor) {
        fillFourDirectional(image, sc, sr, image[sc][sr],  newColor);
    }
    return image;
};
