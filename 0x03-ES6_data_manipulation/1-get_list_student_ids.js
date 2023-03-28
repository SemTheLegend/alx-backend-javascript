export default function getListStudentIds(array) {
  const result = Array.isArray(array);

  if (result) {
    const newList = [];
    for (let x = 0; x < array.length; x++) {
      newList.push(array[x].id);
    }
    return newList;
  }
  const emptyArray = [];
  return emptyArray;
}
