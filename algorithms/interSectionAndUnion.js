// Implement union and intersection of two array(in a efficient way).
// elements of the two given array may be repeated but cannot be repeated in union and intersection array.

const intersectionAndUnion = (arr1, arr2) => {
  const obj1 = {};
  const obj2 = {};

  arr1.forEach(item => {
    obj1[item] = item;
  });

  arr2.forEach(item => {
    obj2[item] = item;
  });

  const union = Object.values({ ...obj1, ...obj2 });
  const intersection = Object.keys(obj1).filter(k => k in obj2);

  return union + " / " + intersection;
};

console.log(intersectionAndUnion([1, 2, 3, 4, 5, 5], [3, 4, 5, 6, 7]));

// [1,2,3,4,5,6,7] [3,4,5]
