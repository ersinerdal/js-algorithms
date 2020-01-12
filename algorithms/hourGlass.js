function hourglassSum(array) {
  let highestSum = Number.NEGATIVE_INFINITY;
  for (let horizontal = 0; horizontal < 4; horizontal++) {
    for (let vertical = 0; vertical < 4; vertical++) {
      let sum =
        array[horizontal][vertical] +
        array[horizontal][vertical + 1] +
        array[horizontal][vertical + 2] +
        array[horizontal + 1][vertical + 1] +
        array[horizontal + 2][vertical] +
        array[horizontal + 2][vertical + 1] +
        array[horizontal + 2][vertical + 2];

      if (highestSum < sum) {
        highestSum = sum;
      }
    }
  }
  return highestSum;
}
