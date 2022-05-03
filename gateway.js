const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = 1800;
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
    console.log("Gateway is Up and Running on PORT " + PORT);
});
