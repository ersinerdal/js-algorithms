function maxCircle(queries) {
  const people = {};
  let max = 0;
  let circles = [];

  queries.forEach(q => {
    const [p1, p2] = q;

    if (!people[p1]) {
      people[p1] = new Set();
    }
    if (!people[p2]) {
      people[p2] = new Set();
    }

    const merged = new Set([...people[1], ...people[2], p1, p2]);

    people[p1] = people[p2] = merged;

    max = Math.max(people[p1].size, max);
    console.log(people);
    circles.push(max);
  });
  return circles;
}

maxCircle([
  [1, 2],
  [3, 4],
  [1, 3],
  [5, 7],
  [5, 6],
  [7, 4]
]);
