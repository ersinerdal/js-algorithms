const stockSpan = arr => {
  const arr2 = [];

  arr.forEach((stock, i) => {
    let span = 1;
    for (let j = 0; j <= i; j++) {
      if (arr[j] < stock) {
        span++;
      }
    }
    arr2.push(span);
  });

  return arr2;
};

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));
//1, 1, 1, 2, 1, 4, 6
