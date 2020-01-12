function isPrime(n) {
  if (isNaN(n) || n % 1 || n < 2) return false;
  const m = Math.sqrt(n);
  for (let i = 2; i <= m; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function primality(n) {
  return isPrime(n) ? "Prime" : "Not prime";
}

primality(6);
