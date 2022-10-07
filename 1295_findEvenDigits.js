// Given an array nums of integers, return how many of them contain an even number of digits.

// SOLUTION:

const findNumbers = function (nums) {
  let counter = 0

  for (let i = 0; i < nums.length; i++) {
    let digits = ''
    digits = digits + nums[i]
    if (digits.length % 2 === 0) {
      counter++
    }
  }

  return counter
}
