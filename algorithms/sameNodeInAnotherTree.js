const a = {
  title: 1,
  children: [
    { title: 2 },
    {
      title: 3,
      children: [
        { title: 4 },
        { title: 5 },
        {
          title: 6,
          children: [{ title: 7 }, { title: 8 }, { title: 9 }, { title: 10 }]
        }
      ]
    }
  ]
};

const b = {
  title: 1,
  children: [
    { title: 2 },
    {
      title: 3,
      children: [
        { title: 4 },
        { title: 5 },
        {
          title: 6,
          children: [{ title: 7 }, { title: 8 }, { title: 9 }, { title: 15 }]
        }
      ]
    }
  ]
};

function find(A, B, target) {
  const findPath = (parent, title) => {
    const stack = [[parent, []]];
    while (stack.length) {
      const [node, path] = stack.pop();
      if (node.title === title) {
        return path;
      }
      if (node.children) {
        stack.push(...node.children.map((node, i) => [node, [...path, i]]));
      }
    }
  };

  const path = findPath(A, target);

  const get = node => {
    let el = node;
    while (path.length) {
      el = get(node.children[path.shift()]);
    }

    return el;
  };

  return get(B);
}

console.log(find(a, b, 10));
