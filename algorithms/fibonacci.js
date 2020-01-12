const fibonacci = (n, cache = {}) => {
  if (cache[n]) return cache[n];
  if (n <= 1) return 1;

  return (cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache));
};

console.log(fibonacci(10));
