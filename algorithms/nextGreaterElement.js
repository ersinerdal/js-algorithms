const nextGreaterElement = arr => {
  const newArray = arr.map((elem, i) => {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > elem) {
        return arr[j];
      }
    }
    return -1;
  });

  return newArray;
};

console.log(nextGreaterElement([1, 2, 7, 6, 5, 9, 3, 4, 5]));
