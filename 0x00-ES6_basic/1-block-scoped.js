export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // Block-scoped, will not affect the outer 'task'
    let task2 = false; // Block-scoped, will not affect the outer 'task2'
  }

  return [task, task2];
}
