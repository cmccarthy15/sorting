describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([])).toEqual([[], []]);
    expect(split([1])).toEqual([[], [1]]);
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
    expect(split([11, 12, 13, 14, 15, 16])).toEqual([[11, 12, 13], [14, 15, 16]]);
  });
});
