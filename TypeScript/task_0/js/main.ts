interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Jean",
    lastName: "Dupont",
    age: 20,
    location: "Paris"
};

const student2: Student = {
    firstName: "Marie",
    lastName: "Curie",
    age: 22,
    location: "Lyon"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement("tr");
    
    const nameCell: HTMLTableCellElement = document.createElement("td");
    nameCell.textContent = student.firstName;
    
    const locationCell: HTMLTableCellElement = document.createElement("td");
    locationCell.textContent = student.location;
    
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
