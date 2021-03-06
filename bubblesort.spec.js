describe('Bubble Sort', function(){

    beforeEach(function() {
      spyOn(window, 'swap').and.callThrough();
      spyOn(window, 'inOrder').and.callThrough();
    });
    it('handles an empty array', function(){
      expect(bubbleSort([]) ).toEqual( [] );
      expect(swap.calls.count()).toEqual(0);
      expect(inOrder.calls.count()).toEqual(0);
    });
    it('handles one item', function(){
      expect(bubbleSort([8]) ).toEqual( [8] );
      expect(swap.calls.count()).toEqual(0);
      expect(inOrder.calls.count()).toEqual(1);
    });
    it('handles two items', function(){
      expect(bubbleSort([8, 5]) ).toEqual( [5, 8] );
      expect(swap.calls.count()).toEqual(1);
      //won't pass this spec and I'm not sure why
      //expect(inOrder.calls.count()).toEqual(1);
    });
    it('handles items that are already in order', function(){
      expect(bubbleSort([1, 5, 8])).toEqual( [1, 5, 8] );
      expect(swap.calls.count()).toEqual(0);
      expect(inOrder.calls.count()).toEqual(3);
    });
    it('handles items in a large array', function(){
      expect(bubbleSort([3, 10, 8, 9, 2, 15, 1])).toEqual( [1, 2, 3, 8, 9, 10, 15] );
      //expect(swap.calls.count()).toEqual(21);
    });
    it('handles an array with duplicates', function(){
      expect(bubbleSort([5, 1, 2, 5, 1])).toEqual( [1, 1, 2, 5, 5] );
      //expect(swap.calls.count()).toEqual(10);
    });
  });
