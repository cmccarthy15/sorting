function bubbleSort(array) {
  let sorted = false;
  for (let end = array.length; end > 0 && !sorted; end--){
    sorted = true;
    for (let j = 0; j < end; j++){
      if (!inOrder(array, j)){
        swap(array, j);
        sorted = false;
      }
    }
  }

  //IN THE BELOW SWAP FUNCTIONED TO COMPARE TWO NUMBERS
  // for (var lastItem = array.length - 1; lastItem > 0; lastItem--){
  //   for (var i = 0; i < lastItem; i++){
  //     var first = array[i];
  //     var second = array[i + 1];
  //     if (swap(first, second)){
  //       //we need to call swap
  //       array[i] = second;
  //       array[i + 1] = first;
  //     }
  //   }
  // }
  return array;
}

function inOrder(array, index){
  if (index === array.length - 1){ return true;}
  return array[index] < array[index + 1];
}

// swap is actually used to see how many comparisons are made
// not how many swaps are made
// how could we use swap to count that instead?
function swap(array, index) {
  const oldLeft = array[index];
  array[index] = array[index + 1];
  array[index + 1] = oldLeft;

}
