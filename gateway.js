const express = require("express");
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser");
const PORT = 4000;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/", routes);
app.listen(PORT, () => {
    console.log("Gateway is Up and Running on PORT " + PORT);
});
