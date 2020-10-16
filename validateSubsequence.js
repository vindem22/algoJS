/*
    Validate Subsequence of an array
    Given an array A [ 1,3,4,5,434,232,12,-23,4,-55]
    Need to determine is the array B [1,23,4,54] is the Subsequence of the A
*/

/*
    First solution with an while loop
    Time complexity is : O(N)
    Space complexity is : O(1)
*/
function validateSubsequence1(array, sequence) {
  let arrP = 0;
  let seqP = 0;

  while (arrP < array.length && seqP < sequence.length) {
    if (array[arrP] === sequence[seqP]) {
      seqP += 1;
    }
    arrP++;
  }
  return seqP === sequence.length;
}

/* 
    Second solution with a for loop 
    Time complexity is : O(N)
    Space complexity is : O(1)
*/
function validateSubsequence2(array, sequence) {
  let seqP = 0;

  for (const i of array) {
    if (seqP === sequence.length) {
      return true;
    }
    if (i === sequence[seqP]) {
      seqP++;
    }
  }
  return seqP === sequence.length;
}

console.log(
  validateSubsequence1([1, 3, 4, 5, 434, 232, 12, -23, 4, -55], [1, 23, 4, 54]),
  validateSubsequence1(
    [1, 3, 4, 5, 434, 232, 12, -23, 4, -55],
    [1, 3, 434, -23]
  )
);
