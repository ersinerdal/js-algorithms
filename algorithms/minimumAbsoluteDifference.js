function minimumAbsoluteDifference(arr) {
  arr.sort();

  let minDiff;

  for (let i = 0; i < arr.length; i++) {
    let absDiff = Math.abs(arr[i + 1] - arr[i]);
    if (!minDiff || absDiff < minDiff) minDiff = absDiff;
    if (minDiff === 0) return 0;
  }
  return minDiff;
}

console.log(
  minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])
);
