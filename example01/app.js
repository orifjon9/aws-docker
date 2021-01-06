const { static } = require('express');
const express = require('express');
const path = require('path')

const app = express();
const PORT = 80;

app.use(express.static("public"))

app.get('/', (req, res) => {
    const file = path.join(__dirname, "views", "welcome.html");
    res.sendFile(file);
});

app.listen(PORT, () => {
    console.log(`http://loclahost:${PORT}`);
    console.log("the service is running")
});