function split(wholeArray) {

      /* your code here to define the firstHalf and secondHalf arrays */
      var center = wholeArray.length / 2;
      var firstHalf = wholeArray.slice(0, center);
      var secondHalf = wholeArray.slice(center);
      return [firstHalf, secondHalf];

    }

    function merge(first, second) {
      var firstIndex = 0;
      var secondIndex = 0;
      var result = [];

      while (firstIndex < first.length && secondIndex < second.length) {
        if (first[firstIndex] <= second[secondIndex]){
          result.push(first[firstIndex]);
          firstIndex++;
        } else {
          result.push(second[secondIndex]);
          secondIndex++;
        }
      }
      var firstRemain = first.slice(firstIndex);
      var secondRemain = second.slice(secondIndex);
      result = result.concat(firstRemain).concat(secondRemain);
      return result;
    }

    function mergeSort(array){
      if (array.length < 2){
        return array;
      }
      var splits = split(array),
        left = splits[0],
        right = splits[1];
      return merge(mergeSort(left), mergeSort(right));
    }
