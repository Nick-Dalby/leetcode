// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// SOLUTION:

const fizzBuzz = (n) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
      i % 3 === 0 && i % 5 === 0 ? answer.push('FizzBuzz')
      : i % 3 === 0 ? answer.push('Fizz')
      : i % 5 === 0 ? answer.push('Buzz')
      : answer.push(i.toString())
  }
  return answer;
}