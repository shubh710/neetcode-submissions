class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans = -Infinity;
        for(let i = 0; i < heights.length; i++){
            for(let j = i+1; j <heights.length; j++){
                const h1 = heights[i]
                const h2 = heights[j]
                const minH = Math.min(h1,h2);
                const dis = j - i;
                ans = Math.max(ans, dis * minH);
            }
        }
        return ans
    }
}
