function flippingBits(N) {
  function intToBitString(input, size, unsigned) {
    if ([8, 16, 32].indexOf(size) == -1) {
      throw "invalid params";
    }
    const min = unsigned ? 0 : -(2 ** size / 2);
    const limit = unsigned ? 2 ** size : 2 ** size / 2;
    if (!Number.isInteger(input) || input < min || input >= limit) {
      throw "out of range or not an int";
    }
    if (!unsigned) {
      input += limit;
    }
    const binary = input.toString(2).replace(/^-/, "");
    return binary.padStart(size, "0");
  }
  function bitStringToInt(input, size, unsigned) {
    if ([8, 16, 32].indexOf(size) == -1) {
      throw "invalid params";
    }
    input = parseInt(input, 2);
    if (!unsigned) {
      input -= 2 ** size / 2;
    }
    return input;
  }
  function reverse(bit) {
    return bit
      .split("")
      .map(bit => (bit === "1" ? 0 : 1))
      .join("");
  }

  return bitStringToInt(reverse(intToBitString(N, 32, true)), 32, true);
}

flippingBits(9);
