function countSwaps(a) {
  let numSwaps = 0;
  const len = a.length;
  function swap(x, y) {
    const tempX = a[x];
    a[x] = a[y];
    a[y] = tempX;
    numSwaps++;
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (a[j] > a[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[len - 1]}`);

  return numSwaps;
}

countSwaps([3, 2, 1]);
