// 0-constants.js

// Use const for task because the value won't change
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Use let for combination since it will be reassigned
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  
  return combination;
}

export function getLast() {
  return ' is okay';
}

