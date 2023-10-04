export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const studentA: Student = {
    firstName: 'Bekalu',
    lastName: 'Endrias',
    age: 22,
    location: 'Ethiopia'
}
const studentB: Student = {
    firstName: 'Abebe',
    lastName: 'Kebede',
    age: 25,
    location: 'Ethiopia'
}

const studentsList: Array<Student> = [studentA, studentB];

const stylesheet = `
    html {
        margin: 0;
        height: 100%;
    }
    body {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80%;
        margin: 10%;
    }
    table {
        border-collapse: collapse;
    }
    thead {
        font-weight: bold;
    }
    td {
        padding: 10px;
        border: 1px solid gray;
        cursor: pointer;
    }
    td:hover {
        background: gainsboro;
    }
    td:nth-child(1) {
        text-align: center;
    }
`;

/**
 * Display a table of students
 * @param {Array<Student>} studentsList - List of students
 * @author Bekalu Geta <https://github.com/bekalue
 */
export const displayStudents = (studentsList: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>First Name</td>');
    headRow.insertAdjacentHTML('beforeend', '<td>Last Name</td>');
    tableHead.insertAdjacentElement('beforeend', headRow);

    for (const student of studentsList) {
        const row = document.createElement('tr');
        row.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        row.insertAdjacentHTML('beforeend', `<td>${student.lastName}</td>`);
        tableBody.insertAdjacentElement('beforeend', row);
    }

    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
const style = document.createElement('style');
style.innerHTML = stylesheet;
document.head.insertAdjacentElement('beforeend', style);
document.title = 'Task 0';
