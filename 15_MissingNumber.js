class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort((a,b)=>a-b)
        for(let i=0;i<nums.length;i++){
            if(!nums.includes(i)){
                return i
            }
        }
        return nums.length
    }
}
