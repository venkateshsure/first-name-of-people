let peopleNameList = require("../country/state/city/index.js");
let firstNames = require("../utilities/utils/index");
function getPeopleInCity(peopleNameList) {
  return firstNames(peopleNameList);
}
module.exports = getPeopleInCity;
