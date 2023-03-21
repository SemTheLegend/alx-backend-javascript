export default function createEmployeesObject(departmentName, employees) {
  let employeeList = [];
  for (let employee of employees) {
    employeeList.append(employee);
  }
  const obj = {
    departmentName: employeeList
  };

  return obj;
}
