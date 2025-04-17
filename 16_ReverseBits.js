class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let rev=n.toString(2).padStart(32, 0).split('').reverse().join('');
        return parseInt(rev,2)
    }
}
