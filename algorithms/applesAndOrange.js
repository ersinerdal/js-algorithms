function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesInRange = apples.filter(apple => {
    return a + apple >= s && a + apple <= t;
  });

  const orangesInRange = oranges.filter(orange => {
    return b + orange <= t && b + orange >= s;
  });

  console.log(applesInRange.length);
  console.log(orangesInRange.length);
}
