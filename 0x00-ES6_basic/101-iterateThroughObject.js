export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Use the iterator to get all employee names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join all names with ' | ' separator
  return employeeNames.join(' | ');
}
