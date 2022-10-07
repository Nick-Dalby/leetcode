// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// SOLUTIONS:

const reverseString = function (s) {
  s.reverse()
}

const reverseStringV2 = function (s) {
  return s.split('').reverse().join('')
}

const reverseStringV3 = function (s) {
  let arr = s.split(''),
    left = 0,
    right = arr.length - 1
  while (left < right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    ++left
    --right
  }
  return arr.join('')
}
