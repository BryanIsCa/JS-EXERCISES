// exercise4.js

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(courses1, courses2) {
  let commonCourses = courses1.filter(course => courses2.includes(course));
  console.log("Common courses:", commonCourses);
}

findCommonCourses(student1Courses, student2Courses);
