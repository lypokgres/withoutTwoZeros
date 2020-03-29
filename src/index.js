const factorial = (n) => {
    const iter = (current, acc) => {
      if (current === 0) {
        return acc;
      }
      return iter(current - 1, acc * current);
    };
  
    return iter(n, 1);
  };
  
  const countComb = (zeros, units) => {
    const n = factorial(zeros + units);
    return n / (factorial(zeros) * factorial(units));
  };
  
  const withoutTwoZeros = (zeros, units) => {
    let current = units;
    for (let i = zeros; i > 1; i -= 1) {
      current -= 1;
      if (current < 0) {
        return 0;
      }
    }
  
  return countComb(zeros, current);
};
  
export default withoutTwoZeros;