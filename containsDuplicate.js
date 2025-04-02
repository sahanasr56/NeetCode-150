class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newA= new Set(nums);
        let len=newA.size==nums.length?false:true
        return len
    }
}
