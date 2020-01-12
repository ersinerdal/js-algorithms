function rotate(matrix) {
  // function statement
  const ROWS = matrix.length - 1;
  return matrix.map((row, rowIndex) =>
    row.map((val, colIndex) => matrix[ROWS - colIndex][rowIndex])
  );
}

console.log(
  rotate([
    ["a", "a", "a", "a"],
    ["b", "b", "b", "b"],
    ["c", "c", "c", "c"],
    ["d", "d", "d", "d"]
  ])
);
