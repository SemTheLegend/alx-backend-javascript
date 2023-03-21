export default function returnHowManyArguments(...args) {
  var count = 0;
  for (let arg of args) {
    count += 1;
    return count;
  }
}
