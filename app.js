const express = require("express");
const app = express();
const PORT = process.argv[2] || 3000;

//ejs
app.set("view engine", "ejs");

//static assets
app.use(express.static("public"));

//routes
app.use(require("./routes"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
