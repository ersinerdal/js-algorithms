// Given a binary array {0,1,1,0,0,1,0,0,1} ,
// sort the array in a way that all zeros come to the left
// and all the one's come to the right side of the array.

const sortOnesAndZeros = arr => {
  const newArray = [];

  while (arr.length) {
    const elem = arr.shift();

    if (elem === 0) {
      newArray.unshift(0);
    }
    if (elem === 1) {
      newArray.push(1);
    }
  }
  return newArray;
};

console.log(sortOnesAndZeros([0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]));
