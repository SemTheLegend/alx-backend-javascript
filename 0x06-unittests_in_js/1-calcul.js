function calculateNumber(type, x, y) {
  if (type === 'SUM') {
    const a = Math.round(x);
    const b = Math.round(y);
    return b + a;
  } else if (type === 'SUBTRACT') {
    const a = Math.round(x);
    const b = Math.round(y);
    return a - b;
  } else if (type === 'DIVIDE') {
    const a = Math.round(x);
    const b = Math.round(y);
    if (b === 0) return 'Error';
    return a / b;
  }
}

module.exports = calculateNumber;
