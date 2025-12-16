console.log("JS file connected ✅");

// Student data
const students = [
    { name: "Asha", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Neha", marks: 90 },
    { name: "Kiran", marks: 65 }
];

// Get div
const studentListDiv = document.getElementById("studentList");

// Display students
students.forEach(student => {
    console.log(student.name + " - " + student.marks);

    const div = document.createElement("div");
    div.className = "student-card";
    div.innerHTML = `
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Marks:</strong> ${student.marks}</p>
    `;

    studentListDiv.appendChild(div);
});
