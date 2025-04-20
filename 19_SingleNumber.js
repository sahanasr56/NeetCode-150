class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let res=new Set()
        for(let i=0;i<nums.length;i++){
            if(!res.has(nums[i])){
                res.add(nums[i])
            }else{
                res.delete(nums[i])
            }
        }
        return Array.from(res)[0]
    }
}
