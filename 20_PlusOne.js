class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let val=parseInt(digits.join(""))
        return (val+1).toString()
    }
}
