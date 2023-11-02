class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  present() {
    const index = this.attendance.findIndex((value) => value === undefined);
    if (index !== -1) {
      this.attendance[index] = true;
    }
  }

  absent() {
    const index = this.attendance.findIndex((value) => value === undefined);
    if (index !== -1) {
      this.attendance[index] = false;
    }
  }

  calculateAVG() {
    if (this.grades.length === 0) {
      return 0;
    }

    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  summary() {
    const averageGrade = this.calculateAVG();
    //const attendanceRatio = this.attendance.filter(true).length / this.attendance.length;
    const attendanceRatio =
      this.attendance.filter((value) => value === true).length / 25;

    if (averageGrade > 90 && attendanceRatio > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRatio > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Serhii", "Kaunenko", 1993);
const student2 = new Student("Ihor", "Tobi", 1991);
const student3 = new Student("Jimmi", "Acha", 1982);

student1.grades = [95, 88, 92, 95, 80, 91];
student2.grades = [95, 92, 98, 95, 88, 92];
student3.grades = [75, 80, 60, 85, 92, 78];

student1.present(); // 1
student1.present(); //2
student1.present(); //3
student1.absent(); //4
student1.absent(); //5
student1.absent(); //6
student1.present(); //7
student1.present(); //8
student1.present(); //9
student1.present(); //10
student1.present(); //11
student1.absent(); //12
student1.absent(); //13
student1.present(); //14
student1.present(); // 15
student1.present(); //16
student1.present(); //17
student1.absent(); //18
student1.absent(); //19
student1.absent(); //20
student1.present(); //21
student1.present(); //22
student1.present(); //23
student1.present(); //24
student1.present(); //25
student1.present(); //26!!
student1.present(); //27!!!
student2.present(); //1
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present(); //24
student3.absent();
student3.absent();
student3.absent();
student3.absent();

console.log(
  `${student1.firstName} ${student1.lastName}, ${student1.getAge()} років`
);
console.log(`Середній бал: ${student1.calculateAVG()}`);
console.log(
  `Відвідуваність: ${
    student1.attendance.filter((value) => value === true).length
  } / ${student1.attendance.length}`
);
console.log(`Результат: ${student1.summary()}`);

/**
  * Serhii Kaunenko, 30 років
  *Середній бал: 90.16666666666667
  *Відвідуваність: 17 / 25
  Результат: Добре, але можна краще
  */

console.log(
  `${student2.firstName} ${student2.lastName}, ${student2.getAge()} років`
);
console.log(`Середній бал: ${student2.calculateAVG()}`);
console.log(
  `Відвідуваність: ${
    student2.attendance.filter((value) => value === true).length
  } / ${student2.attendance.length}`
);
console.log(`Результат: ${student2.summary()}`);

//Ihor Shpur, 32 років
// Середній бал: 93.33333333333333
// Відвідуваність: 24 / 25
// Результат: Молодець!

console.log(
  `${student3.firstName} ${student3.lastName}, ${student3.getAge()} років`
);
console.log(`Середній бал: ${student3.calculateAVG()}`);
console.log(
  `Відвідуваність: ${
    student3.attendance.filter((value) => value === true).length
  } / ${student3.attendance.length}`
);
console.log(`Результат: ${student3.summary()}`);

// Jimmi Acha, 41 років
// Середній бал: 78.33333333333333
// Відвідуваність: 0 / 25
// Результат: Редиска!
