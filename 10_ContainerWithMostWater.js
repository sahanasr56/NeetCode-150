class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let prev=0;
        let maxVal=0;
        let left=0, right=heights.length-1;
        while(left<right){
            let container=(Math.min(heights[left],heights[right]))*(right-left)
            maxVal=Math.max(container,prev);
            prev=maxVal
            if(heights[left]<=heights[right]){
                left++
            }else{
                right--
            }
        }
        return maxVal
    }
}
