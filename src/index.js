module.exports = function getZerosCount(number, base) {
  let counter = 0;
  // for (let i = base; number/i >= 1; i *= base)
  //   counter += Math.floor(number/i);
  for (let i = base; number/i >= 1; i *= base)
    counter += Math.floor(number/i);
  return counter;
}