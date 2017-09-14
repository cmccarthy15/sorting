describe('Bubble Sort', function(){

    beforeEach(function() {
      spyOn(spyTester, 'swap').and.callThrough();
    });
    it('handles an empty array', function(){
      expect( spyTester.bubbleSort([]) ).toEqual( [] );
      expect(spyTester.swap.calls.count()).toEqual(0);
    });
    it('handles one item', function(){
      expect( spyTester.bubbleSort([8]) ).toEqual( [8] );
      expect(spyTester.swap.calls.count()).toEqual(0);
    });
    it('handles two items', function(){
      expect( spyTester.bubbleSort([8, 5]) ).toEqual( [5, 8] );
      expect(spyTester.swap.calls.count()).toEqual(1);
    });
    it('handles items that are already in order', function(){
      expect( spyTester.bubbleSort([1, 5, 8])).toEqual( [1, 5, 8] );
      expect(spyTester.swap.calls.count()).toEqual(3);
    });
    it('handles items in a large array', function(){
      expect( spyTester.bubbleSort([3, 10, 8, 9, 2, 15, 1])).toEqual( [1, 2, 3, 8, 9, 10, 15] );
      expect(spyTester.swap.calls.count()).toEqual(21);
    });
    it('handles an array with duplicates', function(){
      expect( spyTester.bubbleSort([5, 1, 2, 5, 1])).toEqual( [1, 1, 2, 5, 5] );
      expect(spyTester.swap.calls.count()).toEqual(10);
    });
  });
