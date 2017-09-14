function split(wholeArray) {

      /* your code here to define the firstHalf and secondHalf arrays */
      var firstHalf = wholeArray.slice(0, wholeArray.length / 2);
      var secondHalf = wholeArray.slice(wholeArray.length / 2);
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
      var slice1 = first.slice(firstIndex);
      var slice2 = second.slice(secondIndex);
      result = result.concat(slice1).concat(slice2);
      return result;
    }
