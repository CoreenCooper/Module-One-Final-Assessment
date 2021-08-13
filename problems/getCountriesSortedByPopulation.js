/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

const getCountriesSortedByPopulation = (countries) => // fix not passing test
  countries
    .sort((country1, country2)=> country2.population - country1.popluation)
    .map((countryObj)=> countryObj.country);
   
// function getCountriesSortedByPopulation(arr) {
//     return arr.sort((firstCountry, secondCountry) => {
//         return secondCountry["population"] - firstCountry["population"]
//     }).map((countries) => {
//         return countries.country
//     })
// }

module.exports = getCountriesSortedByPopulation