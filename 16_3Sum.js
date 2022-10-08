// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// SOLUTION:
var threeSumClosest = function(nums, target) {
  if (nums === null || nums.length <= 2) return null;
  if (nums.length === 3) return nums[0] + nums[1] + nums[2];
  
  nums.sort((a, b) => a - b);
  
  let n = nums.length;
  let res = null;
  let closest = Infinity;
  
  // two pointers traverse
  for (let i = 0; i < n; i++) {
      let j = i + 1;
      let k = n - 1;
      while (j < k) {
          let sum = nums[i] + nums[j] + nums[k];
          let diff = sum - target;
          if (diff === 0) {
              return sum;
          } else if (diff > 0) {
              // too large, make it smaller by moving k to the left
              k--;
          } else {
              // get the postive diff
              diff = target - sum;
              // too small, make it larger by moving j to the right;
              j++;
          }
          // keep tracking the current closest and update the current sum
          if (diff < closest) {
              closest = diff;
              res = sum;
          }
      }
  }
  return res;
};