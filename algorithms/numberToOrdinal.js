function numberToOrdinal(n) {
  if (n === 0) return "0";

  const suffix = num => {
    const lastDigit = num % 10;
    const last2Digits = num % 100;

    if (last2Digits < 11 || last2Digits > 19) {
      if (lastDigit === 1) {
        return "st";
      }
      if (lastDigit === 2) {
        return "nd";
      }
      if (lastDigit === 3) {
        return "rd";
      }
    }
    return "th";
  };

  return `${n}${suffix(n)}`;
}

console.log(numberToOrdinal(111));
