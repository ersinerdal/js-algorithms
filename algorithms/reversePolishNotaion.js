function calculate(expression) {
  if (expression === "") {
    return 0;
  }
  const illegalInputMessage = "illegal input";
  const isOperator = op => !!mathOps[op];
  const hasInvalidChar = str => !/^[0-9+\-*\/\(\)\.\s+]*$/.test(str);
  const expArray = expression.split(" ");
  const mathOps = {
    "+": (x, y) => x + y,
    "-": (x, y) => y - x,
    "*": (x, y) => x * y,
    "/": (x, y) => y / x
  };

  if (hasInvalidChar(expression)) {
    return illegalInputMessage;
  }
  const stack = [];

  while (expArray.length > 0) {
    const cur = expArray.shift();
    if (isOperator(cur)) {
      if (stack.length < 2) {
        return illegalInputMessage;
      }
      const result = mathOps[cur](stack.pop(), stack.pop());
      stack.push(result);
    } else {
      stack.push(parseFloat(cur));
    }
  }
  const result = stack.pop();

  return stack.length > 0 ? illegalInputMessage : result;
}

console.log(calculate("2 3 +"));
