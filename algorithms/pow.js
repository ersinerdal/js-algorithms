function pow(p, y) {
  if (p > 0 && y === 0) {
    return 1;
  }
  let x = p;
  while (y > 1) {
    x = p * x;
    y--;
  }
  return x;
}

console.log(pow(5, 3));
