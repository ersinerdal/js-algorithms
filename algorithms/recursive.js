const pow = (base, pow) => {
  let i = 1;
  const recursive = b => {
    if (i === pow) {
      return b;
    }
    i++;
    return b * recursive(b);
  };
  return recursive(base);
};

console.log(pow(5, 4));
