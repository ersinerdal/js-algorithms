function pythagoreanTriplet(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const x = arr[i] * arr[i],
          y = arr[j] * arr[j],
          z = arr[k] * arr[k];

        if (x === y + z || y === x + z || z === x + y) return true;
      }
    }
  }
  return false;
}

console.log(pythagoreanTriplet([3, 1, 4, 6, 5]));
// a2 + b2 = c2 => true.
