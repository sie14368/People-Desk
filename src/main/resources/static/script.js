const API_URL = "http://localhost:8080/employees";

window.onload = function () {
    getEmployees();
};

async function getEmployees() {

    const response = await fetch(API_URL);
    const employees = await response.json();

    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = "";

    employees.forEach(employee => {

        employeeList.innerHTML += `
            <div class="employee-card">

                <h3>${employee.employeeName}</h3>

                <p><strong>Email:</strong> ${employee.email}</p>

                <p><strong>Department:</strong> ${employee.department}</p>

                <p><strong>Designation:</strong> ${employee.designation}</p>

                <p><strong>Salary:</strong> ₹${employee.salary}</p>

                <div class="actions">

                    <button onclick="editEmployee(${employee.id})">
                        Edit
                    </button>

                    <button class="delete-btn"
                            onclick="deleteEmployee(${employee.id})">
                        Delete
                    </button>

                </div>

            </div>
        `;
    });

}

async function addEmployee() {

    const employee = {

        employeeName: document.getElementById("employeeName").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        designation: document.getElementById("designation").value,
        salary: document.getElementById("salary").value

    };

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(employee)

    });

    document.getElementById("employeeName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("department").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("salary").value = "";

    getEmployees();

}

function editEmployee(id){
    alert("Edit functionality coming next!");
}

function deleteEmployee(id){
    alert("Delete functionality coming next!");
}