// prect/src/task.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Temporary in-memory "database"
const students = [];

// 1) Serve the form
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "register.html"));
});

// 2) POST: create student
app.post("/students", (req, res) => {
  const { name, email, age } = req.body;

  // validation
  if (!name || name.trim().length < 2) {
    return res.status(400).json({ message: "Name must be at least 2 characters" });
  }
  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Email is invalid" });
  }

  const ageNumber = Number(age);
  if (!Number.isFinite(ageNumber) || ageNumber < 16) {
    return res.status(400).json({ message: "Age must be 16 or above" });
  }

  // "save"
  const newStudent = {
    id: students.length + 1,
    name: name.trim(),
    email: email.trim(),
    age: ageNumber,
    createdAt: new Date().toISOString(),
  };

  students.push(newStudent);

  return res.status(201).json({
    message: "Student registered successfully",
    student: newStudent,
  });
});

// 3) GET: list students
app.get("/students", (req, res) => {
  res.json({ count: students.length, students });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));