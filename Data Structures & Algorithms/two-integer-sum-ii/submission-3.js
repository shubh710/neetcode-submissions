class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const nums = numbers.sort((a,b) => +a - +b);
        let i = 0, j = nums.length -1;
        console.log(nums)
        while(i < j){
            const total = nums[i] + nums[j];
            if(total === target) return [i+1,j+1];
            if(total < target) i++;
            if(total > target) j--;
        }
        return []
    }
}
