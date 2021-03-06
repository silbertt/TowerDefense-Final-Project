/**
* Checks if two values are within the given tolerance of each other.
*
* @method Phaser.Math#within
* @param {number} a - The first number to check
* @param {number} b - The second number to check
* @param {number} tolerance - The tolerance. Anything equal to or less than this is considered within the range.
* @return {boolean} True if a is <= tolerance of b.
* @see {@link Phaser.Math.fuzzyEqual}
*/
var Within = function (a, b, tolerance)
{
    return (Math.abs(a - b) <= tolerance);
};

module.exports = Within;
