// ARRAY to store student OBJECTS
let students = [];

// push() – Add student
function addStudent() {
    let name = document.getElementById("name").value;
    let mark = Number(document.getElementById("mark").value);

    if (name === "" || mark === "") {
        alert("Enter name and mark");
        return;
    }

    // OBJECT
    let student = {
        name: name,
        mark: mark
    };

    students.push(student); // push()

    console.log("Student Added:", student);
    console.log("Students Array:", students);

    displayStudents();
}

// pop() – Remove last student
function removeLastStudent() {
    if (students.length === 0) {
        alert("No students to remove");
        return;
    }

    let removedStudent = students.pop(); // pop()

    console.log("Removed Student:", removedStudent);
    console.log("Remaining Students:", students);

    displayStudents();
}

// map() – Display all students
function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.map(student => {
        // Accessing object properties
        let li = document.createElement("li");
        li.textContent = `${student.name} : ${student.mark}`;
        list.appendChild(li);
    });
}

// filter() – Passed students
function showPassedStudents() {
    let passedList = document.getElementById("passedList");
    passedList.innerHTML = "";

    let passedStudents = students.filter(student => student.mark >= 40); // filter()

    console.log("Passed Students:", passedStudents);

    passedStudents.map(student => {
        let li = document.createElement("li");
        li.textContent = `${student.name} : ${student.mark}`;
        passedList.appendChild(li);
    });
}
