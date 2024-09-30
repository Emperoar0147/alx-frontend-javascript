export default function createIteratorObject(report) {
  // Create a generator function to yield each employee
  function* employeeGenerator() {
    for (const department of Object.keys(report.allEmployees)) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }

  // Return an iterator
  return employeeGenerator();
}
