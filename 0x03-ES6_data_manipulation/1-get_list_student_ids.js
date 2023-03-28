export default function getListStudentIds(array) {
  const result = Array.isArray(array);

  if (result) {
    return (`${array} is an array.`);
  }
  const emptyArray = [];
  return emptyArray;
}
