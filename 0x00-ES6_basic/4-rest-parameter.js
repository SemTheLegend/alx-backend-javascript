export default function returnHowManyArguments(...args) {
  let count = 0;
  for (let x = 0; x <= args.length; x++) {
    count++;
  }
  return count;
}
