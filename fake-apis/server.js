const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4001;
app.use(express.json());
app.get("/fakeapi", (req, res, next) => {
    res.send("Hello from FakeAPI !");
});

app.post("/bogusapi", (req, res, next) => {
    console.log(req.headers);
    console.log(req.body);
    res.send("Hello from BogusAPI!");
});

app.listen(PORT, () => {
    console.log("FakeAPI server is up and running on PORT " + PORT);
});
