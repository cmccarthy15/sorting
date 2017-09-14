describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([])).toEqual([[], []]);
    expect(split([1])).toEqual([[], [1]]);
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
    expect(split([11, 12, 13, 14, 15, 16])).toEqual([[11, 12, 13], [14, 15, 16]]);
  });
});

describe('Merge function', function() {
  it('takes two sorted arrays and returns a merged array', function() {
    // your code here
    expect(merge([],[])).toEqual([]);
    expect(merge([1],[2])).toEqual([1,2]);
    expect(merge([1, 5], [2,3,8])).toEqual([1, 2, 3, 5,8]);
    //expect(merge([11, 12, 13, 14, 15, 16])).toEqual([[11, 12, 13], [14, 15, 16]]);
  });
});
