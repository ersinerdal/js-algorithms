function repeatedString(s, n) {
  const numberOfAinS = s.split("").filter(l => l === "a").length;
  const words = Math.floor(n / s.length);
  const totalLength = s.length * words;
  const diff = n - totalLength;
  const numberOfAinDiff = s
    .split("")
    .slice(0, diff)
    .filter(l => l === "a").length;
  const tot = words * numberOfAinS + numberOfAinDiff;
  return tot;
}
