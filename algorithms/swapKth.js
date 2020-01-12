const swapKth = (arr, k) => {
  const len = arr.length;
  const indexFromLeft = k - 1;
  const indexFromRight = len - k;

  const itemFromLeft = arr[indexFromLeft];
  const itemFromRight = arr[indexFromRight];

  arr[indexFromLeft] = itemFromRight;
  arr[indexFromRight] = itemFromLeft;

  return arr;
};

console.log(swapKth([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
