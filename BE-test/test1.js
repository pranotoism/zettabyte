/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 *
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  {
    session_id: 1,
    time: '09:00',
    student: { student_id: 1, name: 'Adi' },
    class: { class_id: 1, name: 'A' },
  },
  {
    session_id: 2,
    time: '10:00',
    student: { student_id: 5, name: 'Surya' },
    class: { class_id: 3, name: 'C' },
  },
  {
    session_id: 2,
    time: '10:00',
    student: { student_id: 8, name: 'Edi' },
    class: { class_id: 4, name: 'D' },
  },
  {
    session_id: 2,
    time: '10:00',
    student: { student_id: 7, name: 'Dede' },
    class: { class_id: 4, name: 'D' },
  },
  {
    session_id: 1,
    time: '09:00',
    student: { student_id: 3, name: 'Bayu' },
    class: { class_id: 2, name: 'B' },
  },
  {
    session_id: 1,
    time: '09:00',
    student: { student_id: 2, name: 'Budi' },
    class: { class_id: 1, name: 'A' },
  },
  {
    session_id: 1,
    time: '09:00',
    student: { student_id: 4, name: 'Dharma' },
    class: { class_id: 2, name: 'B' },
  },
  {
    session_id: 2,
    time: '10:00',
    student: { student_id: 3, name: 'Maha' },
    class: { class_id: 3, name: 'C' },
  },
];

function result(sessions) {
  const formattedSessions = [];

  // Iterate over each session in the sessions array
  sessions.forEach(({ session_id, time, student, class: classData }) => {
    // Find the session with the same session_id
    let session = formattedSessions.find((s) => s.session_id === session_id);

    // If the session doesn't exist, create a new session
    if (!session) {
      session = { session_id, time, classes: [] };
      formattedSessions.push(session);
    }

    // Find the class within this session
    let classObj = session.classes.find(
      (c) => c.class_id === classData.class_id
    );

    // If the class doesn't exist, create a new class
    if (!classObj) {
      classObj = {
        class_id: classData.class_id,
        name: classData.name,
        students: [],
      };
      session.classes.push(classObj);
    }

    // Add the student to the class if they are not already in the list
    if (!classObj.students.some((s) => s.student_id === student.student_id)) {
      classObj.students.push({
        student_id: student.student_id,
        name: student.name,
      });
    }
  });

  return formattedSessions;
}

console.log(result(sessions));
