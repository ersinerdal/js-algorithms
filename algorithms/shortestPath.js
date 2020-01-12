const matrix = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

const start = [0, 0];
const end = [2, 2];

function findWay(position, end) {
  const queue = [];
  const cols = matrix[0].length;
  const rows = matrix.length;

  matrix[position[0]][position[1]] = 2; // visited
  queue.push([position]); // store a path, not just a position

  while (queue.length > 0) {
    const path = queue.shift(); // get the path out of the queue
    const pos = path[path.length - 1]; // ... and then the last position from it

    const possibleSteps = [
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] + 1],
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1]
    ];

    for (let i = 0; i < possibleSteps.length; i++) {
      const x = possibleSteps[i][0];
      const y = possibleSteps[i][1];

      if (x === end[0] && y === end[1]) {
        // we are there
        return path.concat([end]);
      }

      if (
        x < 0 || // out of matrix
        x >= cols || // out of matrix
        y < 0 || // out of matrix
        y >= rows || // out of matrix
        matrix[x][y] !== 0 // visited or not valid
      ) {
        continue;
      }

      matrix[x][y] = 2; // visited
      const newPath = path.concat([possibleSteps[i]]);
      queue.push(newPath);
    }
  }
}

const path = findWay(start, end);
console.log(JSON.stringify(path));
