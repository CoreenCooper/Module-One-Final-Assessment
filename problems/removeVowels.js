/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/



// function removeVowels(str) {
//   let vowels = "aeiouAEIOU"
//   let newStr = "";
// for (let i = 0; i < str.length; i++) { // for (const char of str.toLLowerCase())
//   const char = str[i]
//   if (!vowels.includes(char)) {
//     newStr += char;
//   }
// }
// return newStr

// }

// see if can write in one line

// function removeVowels(str) {
//     let vowels = ["a", "e", "i", "o", "u"]
//     let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i].toLowerCase())) {
//       newStr += str[i];
//     }
//   }
//   return newStr

// }

module.exports = removeVowels
