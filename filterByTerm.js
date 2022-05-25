
function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(new RegExp(searchTerm, "i"))
  });
}

module.exports = filterByTerm;