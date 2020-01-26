function maskify(creditCard) {
  const ccArray = creditCard.split("");

  if (ccArray.length < 6) {
    return creditCard;
  }

  const isInteger = chr => Number.isInteger(parseInt(chr));

  const masked = ccArray.map((digit, index) => {
    if (index === 0 || index >= ccArray.length - 4) {
      return digit;
    }
    return isInteger(digit) ? "#" : digit;
  });

  return masked.join("");
}

console.log(maskify("12345qwert8990"));
