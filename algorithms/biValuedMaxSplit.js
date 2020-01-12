// function solution(A) {
//   let highest = 0;
//
//   const set = new Set(A);
//   if (set.size === 2) {
//     return A.length;
//   }
//
//   A.forEach((num, index) => {
//     for (let i = index + 1; i <= A.length; i++) {
//       const curr = A[i];
//       if (num === curr) {
//         if (i > highest) {
//           console.log(num, curr, i);
//           highest = i - index;
//         }
//       }
//     }
//   });
//   return highest + 1;
// }
//
// console.log(solution([2, 1, 3, 3, 2, 4, 5, 6]));

function solution(A) {
  let highest = 0;

  const set = new Set(A);
  if (set.size === 2) {
    return A.length;
  }

  A.forEach((num, index) => {
    let nums = {};
    nums[num] = true;

    for (let i = index + 1; i <= A.length; i++) {
      const curr = A[i];
      nums[curr] = true;
      const diff = i - index;
      if (Object.keys(nums).length > 2) {
        break;
      }
      if (diff > highest) {
        highest = diff;
      }
    }
  });
  return highest + 1;
}

console.log(
  solution([1, 3, 3, 3, 4, 4, 3, 4, 4, 7, 7, 8, 9, 4, 5, 3, 3, 3, 3])
);
