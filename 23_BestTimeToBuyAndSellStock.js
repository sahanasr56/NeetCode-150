class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxVal=0;
        for(let i=0;i<prices.length-1;i++){
            for(let j=i+1;j<prices.length;j++){
                let diff=prices[i]<prices[j]?prices[j]-prices[i]:0
                maxVal=Math.max(diff, maxVal)
            }
        }
        return maxVal
    }
}
