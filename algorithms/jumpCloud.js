function jumpingOnClouds(c) {
  let path = [];

  const setPath = cloudIndex => {
    if (cloudIndex > c.length - 1) {
      return;
    }
    path.push(cloudIndex);
    if (c[cloudIndex + 2] === 0) {
      setPath(cloudIndex + 2);
    } else {
      setPath(cloudIndex + 1);
    }
  };

  setPath(0);

  return path.length - 1;
}
