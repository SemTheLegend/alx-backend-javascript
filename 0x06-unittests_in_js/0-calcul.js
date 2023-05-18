function calculateNumber(x, y) {
  const a = Math.round(x);
  const b = Math.round(y); 
  const result = a + b;
  return result;
}

module.exports = calculateNumber;
