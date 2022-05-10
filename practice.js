/*
Exercise 3-8
Write a program that processes an array of student
objects and determines the grade quartiles—that is,
the grade one would need to score as well as or
better than 25% of the students, 50% of the students,
and 75% of the students.
*/

function sortNum(arr) {
  let len = arr.length;
  let emp = []
  let highest = 0
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > highest) {
        highest = arr[i]
      }
    }
    emp.unshift(highest)
    let index = arr.indexOf(highest)
    if (index > -1) {
      arr.splice(index, 1)
    }
    highest = 0
  }
  return emp
}

const student = [
  [87, 10001, "Fred"],
  [28, 10002, "Tom"],
  [100, 10003, "Alistair"],
  [78, 10004, "Sasha"],
  [84, 10005, "Erin"],
  [98, 10006, "Belinda"],
  [75, 10007, "Leslie"],
  [70, 10008, "Candy"],
  [81, 10009, "Aretha"],
  [68, 10010, "Veronica"]
];

let grades = []

for (let i = 0; i < student.length; i++) {
  grades.push(student[i][0])
}

let sortedGrades = sortNum(grades)

let index25 = Math.ceil((sortedGrades.length / 4)-1)
let index50 = Math.ceil((sortedGrades.length / 2)-1)
let index75 = Math.ceil((sortedGrades.length * 0.75)-1)

let grade25 = sortedGrades[index25+1]
let grade50 = sortedGrades[index50+1]
let grade75 = sortedGrades[index75+1]

let fullDeclaration = `In order to get a better grade than 25% you must get a ${grade25}%, better than 50% of students ${grade50}%, better than 75% of student ${grade75}%.`

console.log(fullDeclaration)

/*
Ideas
-get grade to be better than 25%
-get grade to be better than 50%
-get grade to be better than 75%

-Quartiles
  sort by grade, then divide by four?????
  e.g. 'better than 25%'
    sort 100 grades from worst to best
    from worst 25 grades, what's the 26 grade?
-wtf are quartiles??
-what 'student' objects???
*/