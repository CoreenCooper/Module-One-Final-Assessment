/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/

const removeOddNumbers = (nums) => {
    return nums.filter(num => num % 2 === 0)
}

// function removeOddNumbers(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

module.exports = removeOddNumbers
