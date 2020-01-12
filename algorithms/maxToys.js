function maximumToys(prices, k) {
  const sorted = prices.sort((a, b) => a - b);
  let count = 0;

  sorted.reduce(function(a, b, i) {
    const sum = a + b;
    if (sum < k) {
      count = i;
      return sum;
    }
  }, 0);
  return count + 1;
}

maximumToys([1, 12, 5, 111, 200, 1000, 10], 50);
