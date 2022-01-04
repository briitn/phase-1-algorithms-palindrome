function isPalindrome(word) {
  // Write your algorithm here
  let i=0;
  let y=word.length-1
while (i<=y){
  if (word.charAt(i)===word.charAt(y)){
  i++;y--
  return true;}
  else{return false}
}
}

/* 
  Add your pseudocode here
  set y to last word character
if charAt i=y
increase i and decrease y and test again
*/

/*
  Add written explanation of your solution here
Palindromes work because the first letter would also be the last and second would also be the second last, so on and so forth.
So you set a variable(i) to be the first letter and another one to be the last(y) and compare to see if they are the same.
If they are the same you increase i to to be the next letter and decrease y to be the second to last letter and repeat.
If i and y are the same all the way through, the function should return true; If not it should return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false")
  console.log("=>", isPalindrome("spider"))

  console.log("Expecting: true")
  console.log("=>", isPalindrome("madam"))
}

module.exports = isPalindrome;
