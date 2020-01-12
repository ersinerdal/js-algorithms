function makeAnagram(a, b) {
  const arr1 = a.split("");
  const arr2 = b.split("");

  const total = arr1.length + arr2.length;
  let commons = [];
  let i = 0;
  while (i < arr1.length && arr2.length > 0) {
    const curr = arr1[i];
    for (let j = 0; j <= arr2.length - 1; j++) {
      if (curr === arr2[j]) {
        commons.push(curr);
        arr2.splice(j, 1);
        break;
      }
    }
    i++;
  }
  return total - commons.length * 2;
}
console.log(
  makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
);
