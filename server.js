const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/test", (req, res) => {
    res.sendFile(__dirname + "/public/test/test.html");
})

app.get("/download/:appName", (req, res) => {
    let appName = req.params.appName;
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});