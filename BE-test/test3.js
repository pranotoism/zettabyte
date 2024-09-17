/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  {
    session_name: 'first test',
    classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }],
  },
  {
    session_name: null,
    classes: [
      { class_name: 'second class', students: [{ student_name: 'adi' }] },
    ],
  },
];

function cleanObject(obj) {
  // Iterate through the keys of the object
  for (const key in obj) {
    const value = obj[key];

    // If value is an object, recursively clean it
    if (typeof value === 'object' && value !== null) {
      cleanObject(value);
    }

    // If value is null or undefined, delete the key
    if (value === null || value === undefined) {
      delete obj[key];
    }
  }
}

function result(data) {
  // Iterate through each item in the data array and clean it
  data.forEach((item) => cleanObject(item));
  return data;
}

console.log(result(data));
