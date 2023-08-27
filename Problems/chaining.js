// Return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 60

let students = [
  { name: "Raj", rollno: 31, marks: 80 },
  { name: "Jenny", rollno: 15, marks: 69 },
  { name: "Sahil", rollno: 16, marks: 35 },
  { name: "John", rollno: 7, marks: 55 },
];

const totalmarks = students
  .map((stu) => {
    stu.marks = stu.marks > 60 ? stu.marks : stu.marks + 20;
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, stu) => acc + stu.marks, 0);

console.log(totalmarks);
