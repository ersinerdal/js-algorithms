const maximumSumOFNonAdjecents = arr => {
  let greatest = 0;

  arr.forEach((item, i) => {
    let sum = item;

    for (let j = i + 2; j <= arr.length - 1; j += 2) {
      sum += arr[j];
    }
    if (sum > greatest) {
      greatest = sum;
    }
  });
  return greatest;
};

console.log(maximumSumOFNonAdjecents([5, 5, 10, 100, 10, 5, 3, 30]));
