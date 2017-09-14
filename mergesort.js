function split(wholeArray) {
      const center = wholeArray.length / 2,
         firstHalf = wholeArray.slice(0, center), secondHalf = wholeArray.slice(center);
      return [firstHalf, secondHalf];
    }

function merge(first, second) {
  let firstIndex = 0,
    secondIndex = 0,
    result = [];

  while (firstIndex < first.length && secondIndex < second.length) {
    if (first[firstIndex] <= second[secondIndex]){
      result.push(first[firstIndex]);
      firstIndex++;
    } else {
      result.push(second[secondIndex]);
      secondIndex++;
    }
  }
  //check big O notation
  const firstRemain = first.slice(firstIndex), secondRemain = second.slice(secondIndex);
  result = result.concat(firstRemain).concat(secondRemain);
  return result;
}

function mergeSort(array){
  if (array.length < 2){
    return array;
  }
  const splits = split(array),
    left = splits[0],
    right = splits[1];
  return merge(mergeSort(left), mergeSort(right));
}
