function bubbleSort(array) {
  for (var lastItem = array.length - 1; lastItem > 0; lastItem--){
    for (var i = 0; i < lastItem; i++){
      var first = array[i];
      var second = array[i + 1];
      if (swap(first, second)){
        //we need to call swap
        array[i] = second;
        array[i + 1] = first;
      }
    }
  }
  return array;
}

// swap is actually used to see how many comparisons are made
// not how many swaps are made
// how could we use swap to count that instead?
function swap(num1, num2) {
  return num1 > num2;

}
