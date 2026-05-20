const expr = require("express");
const app = expr();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Ensure upload directory exists
const uploadDir = path.join(__dirname, "File");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use(expr.urlencoded({ extended: true }));
app.use(expr.static("../public", { index: "form.html" }));

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-file.pdf");
  }
});
const upload = multer({ storage: storage }).single('file');

app.post("/upload", upload, (req, res) => {
  if (!req.file) {
    return res.send(`No file uploaded`);
  }
  res.send(`
    <p>${req.file.originalname} has been uploaded </p>
    <a href='/'>Go Back</a>
  `);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});