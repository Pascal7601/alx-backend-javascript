interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {firstName: 'pascal', lastName: 'levis', age: 12, location: 'mombasa'};
const student2: Student = {firstName: 'fidel', lastName: 'nadaba', age: 30, location: 'Busia'}
const studentList: Student[] = [student1, student2];

function renderTable(): void {
  const table = document.createElement('table');
  studentList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  document.body.appendChild(table);
}

renderTable();
