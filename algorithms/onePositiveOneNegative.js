const onePosOneNeg = arr => {
  const negArr = [];
  const posArr = [];

  arr.forEach(item => {
    if (item < 0) {
      negArr.push(item);
    } else {
      posArr.push(item);
    }
  });

  const newArray = [];

  while (negArr.length > 0 || posArr.length > 0) {
    const pos = posArr.shift();
    const neg = negArr.shift();

    if (pos !== undefined) {
      newArray.push(pos);
    }
    if (neg !== undefined) {
      newArray.push(neg);
    }
  }

  return newArray;
};

console.log(onePosOneNeg([-1, 6, 9, -4, -10, -9, 8, 8, 4, 5]));
//[6,-1,9,-4,8,-10,8,-9,4]
