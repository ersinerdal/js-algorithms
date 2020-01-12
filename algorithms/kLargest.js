function kLargest(arr, k) {
  arr.sort((a, b) => a - b);
  const largestK = [];
  const len = arr.length;

  for (let i = 1; i <= k; i++) {
    largestK.push(arr[len - i]);
  }

  return largestK;
}

console.log(kLargest([1, 23, 12, 9, 30, 2, 50], 3));
// 50, 30, 23.
