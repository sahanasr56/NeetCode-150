class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res=0;
        let prev=0;
        for(let i=0;i<nums.length;i++){
            let count=0;
            for(let j=0;j<nums.length;j++){
                if(nums.includes(nums[i]+j)){
                    count=count+1
                }else{
                    break
                }
            }
            res=Math.max(count, prev)
            prev=res;
        }
        return nums.length==0?0:res;
    }
}
