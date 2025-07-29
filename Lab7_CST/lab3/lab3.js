const studentArray = [
  { id: "301", name: "Hassan Adel", age: 21 },
  { id: "302", name: "Aisha Nabil", age: 22 },
  { id: "303", name: "Khalid Tarek", age: 20 },
  { id: "304", name: "Rania Zaki", age: 23 },
  { id: "305", name: "Samir Fouad", age: 24 },
  { id: "306", name: "Nada Kamal", age: 19 },
];

const studentDropdown = document.getElementById("studentSelect");

studentArray.map(student => {
  const optionTag = document.createElement("option");
  optionTag.value = student.id;
  optionTag.innerText = student.id;
  studentDropdown.appendChild(optionTag);
});

studentDropdown.addEventListener("change", function() {
  const selectedStudentId = this.value;
  const displayDiv = document.getElementById("studentData");
  const studentInfo = studentArray.find(s => s.id === selectedStudentId);

  if (studentInfo) {
    displayDiv.innerHTML = `
      <div><b>Name:</b> ${studentInfo.name}</div>
      <div><b>Age:</b> ${studentInfo.age}</div>
    `;
  } else {
    displayDiv.innerHTML = "";
  }
});
