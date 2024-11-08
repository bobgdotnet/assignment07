// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.querySelector('#addForm');
const employeeTable = document.querySelector('#employees');
const empCount = document.querySelector('#empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault(); // PREVENT FORM SUBMISSION

    // Array of form field IDs
    const fields = ['id', 'name', 'extension', 'email', 'department'];

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = employeeTable.insertRow();

    // Loop through fields, get values, and insert as cells
    fields.forEach(field => {
        const value = document.querySelector(`#${field}`).value;
        newRow.insertCell().appendChild(document.createTextNode(value));
    });

    // CREATE THE DELETE BUTTON
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteCell.appendChild(deleteBtn);

    // DELETE EMPLOYEE WITH CONFIRMATION
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this employee?')) {
            employeeTable.deleteRow(newRow.rowIndex);
            count--;
            empCount.textContent = `(${count})`;
        }
    });

    // RESET THE FORM AND SET FOCUS BACK TO THE ID TEXT BOX
    form.reset();
    document.querySelector('#id').focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.textContent = `(${count})`;
});