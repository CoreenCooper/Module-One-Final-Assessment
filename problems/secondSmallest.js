/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

// sorting the big O time complexity  // sorting is N log(n)
function secondSmallest(nums) {
  if(nums.length < 2) {
    return null;
  }
  nums.sort((a, b) => a - b) 
    return nums[1];
  }

// function secondSmallest(arr) {
//     let smallNum = Infinity;
//     let secondSmall = Infinity;
//     for (let i = 0; i < arr.length; i++) { // arr.forEach(num =>)
//       if (arr[i] < smallNum) {
//         secondSmall = smallNum
//         smallNum = arr[i];
//       } else if(arr[i] < secondSmall) {
//         secondSmall = arr[i]
//       }
//     }
//     return secondSmall
//   }


module.exports = secondSmallest
