const maxSum = arr => {
  let res = 0;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let curr_sum = 0;

    // Compute sum of all values. We don't
    // actually rotation the array, but compute
    // sum by finding ndexes when arr[i] is
    // first element

    for (let j = 0; j < len; j++) {
      const index = (i + j) % len;
      curr_sum += j * arr[index];
    }

    res = Math.max(res, curr_sum);
  }

  return res;
};

console.log(maxSum([8, 3, 1, 2]));
