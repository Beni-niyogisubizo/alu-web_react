interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Beni',
  lastName: 'Niyogisubizo',
  age: 22,
  location: 'Belgium',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 24,
  location: 'Italy',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
