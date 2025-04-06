class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res=new Map();
        let newA=nums.sort((a,b)=>a-b)
        // console.log(newA)
        for(let ele of newA){
            res.set(ele, (res.get(ele) || 0)+1)
        }
        let valueArr=Array.from(res.values());
        // console.log(valueArr)
        let fin=valueArr.map((val,ind)=>({val, ind})).sort((a,b)=>b.val-a.val).slice(0,k).map((obj)=> obj.ind);
        // console.log(fin)
        let result=[]
        for(let i of fin){
            result.push(Array.from(res.keys())[i])
        }
        return result
    }
}
