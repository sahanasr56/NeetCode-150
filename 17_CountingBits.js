class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res=[]
        for(let i=0;i<=n;i++){
            let bin=i.toString(2).split('');
            let val=bin.filter(n=>n=='1');
            res.push(val.length)
        }
        return res
    }
}
