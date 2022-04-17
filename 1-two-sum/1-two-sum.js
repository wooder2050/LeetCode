/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const answer = [];
    for(let i = 0; i < nums.length; i++) {
        answer.push(i);
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                answer.push(j);
                return answer;
            }
        }
        answer.pop();
    }
    return answer;
};