class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let val=n.toString(2).split('');
        let res=val.filter(n=>n=='1');
        return res.length
    }
}
