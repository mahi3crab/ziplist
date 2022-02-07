function zipListTheSimpleWay(list1, list2) {
  let finalList = [];
  for (let i = 0; i < list1; i++) {
    finalList.push(list1[i]);
    finalList.push(list2[i]);
  }
  return finalList;
}

console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));