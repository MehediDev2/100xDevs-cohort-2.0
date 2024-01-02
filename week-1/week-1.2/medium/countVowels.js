/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const strlower = str.toLowerCase()
    let count = 0;
    for(value of strlower) {
      const alphaa = value === 'a'
      const alphae = value === 'e'
      const alphai = value === 'i'
      const alphao = value === 'o'
      const alphau = value === 'u'
      if(alphaa || alphae || alphai || alphao || alphau){
        count++;
      }
    }
    return count;
}

module.exports = countVowels;