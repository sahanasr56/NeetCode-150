class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let rev=parseInt(x.toString().split('').reverse().join(''));
        let res=x>=0?rev:-rev;
        let result=res<(-(2**31)) || res>((2**31)-1)?0:res
        return result
    }
}
