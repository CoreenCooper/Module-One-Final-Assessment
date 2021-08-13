/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/

// function removeNumbersAtOddIndices(arr) {
//     arr.forEach((el, i )=> {
//         if(i %2 === 0) {
//             output.push(el)
//         }
//     })
//     return output;
// }

// function removeNumbersAtOddIndices(arr) {
//     return arr.filter ((el, i) => {
//         if(i % 2 === 0) {
//             return true
//         } else {
//             return false;
//         }
//     })
// }

// function removeNumbersAtOddIndices(arr) {
//     return arr.filter ((el, i) => {
//         return i % 2 === 0
//     }

const removeNumbersAtOddIndices = (arr) => arr.filter ((el, i) => i % 2 === 0); 
const removeNumbersAtOddIndices = (arr) => arr.filter ((_, i) => i % 2 === 0); // or if no parameter is being used at first position

// function removeNumbersAtOddIndices(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i += 2) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }

module.exports = removeNumbersAtOddIndices