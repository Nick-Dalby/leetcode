// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// SOLUTION:

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const words = s.trim().split(' ')
  return words.length > 0 ? words[words.length - 1].length : 0
}
