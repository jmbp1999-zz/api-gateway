const express = require("express");
const app = express();
const PORT = 4001;

app.use(express.json());

app.get("/fakeapi", (req, res, next) => {
    res.send("Hello from FakeAPI !");
});

app.get("/bogusapi", (req, res, next) => {
    res.send("Hello from BogusAPI!");
});

app.listen(PORT, () => {
    console.log("FakeAPI server is up and running on PORT " + PORT);
});
