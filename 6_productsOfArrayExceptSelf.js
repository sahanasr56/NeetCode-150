class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result=[]
        for(let i=0; i<nums.length;i++){
            let dum=[...nums];
            dum.splice(i,1)
            let res=dum.reduce((a,b)=>a*b)
            result.push(res)
        }
        return result
    }
}
