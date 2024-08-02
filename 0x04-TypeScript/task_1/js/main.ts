interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Diectories extends Teacher {
  numberOfReports: number;
}
interface printTeacherFunction {
  (firstName: string, lastName: string)
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher('Pascal', 'levis'));

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework() {
    return 'currently workin';
  }
  displayName() {
    return this.firstName;
  }

}


