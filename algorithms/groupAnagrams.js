const groupAnagrams = arr => {
  const res = {};

  while (arr.length > 0) {
    const word = arr.shift();
    const sorted = word
      .split("")
      .sort()
      .join("");
    const existingGroup = res[sorted];
    res[sorted] = existingGroup ? [...existingGroup, word] : [word];
  }
  return res;
};

console.log(groupAnagrams(["monk", "konm", "bbc", "cbb", "dell", "ledl"]));
