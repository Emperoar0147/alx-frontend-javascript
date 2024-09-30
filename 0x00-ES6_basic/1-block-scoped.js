export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;  // Block-scoped, doesn't overwrite outer `task`
    let task2 = false; // Block-scoped, doesn't overwrite outer `task2`
  }

  return [task, task2]; // Returns the values from the outer scope
}
