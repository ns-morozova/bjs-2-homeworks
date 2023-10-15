function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Екатерина", "женский", 20);
let student2 = new Student("Александр", "мужской", 21);
let student3 = new Student("Анна", "женский", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if(this.marks === undefined) {
    return 0;   
  }
  this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined) {
    return 0;
  }
  if(this.marks.length === 0) {
    return 0;
  }
  this.average = this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
  return this.average;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}


student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)