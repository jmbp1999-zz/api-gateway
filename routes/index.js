const express = require("express");
const router = express.Router();
const axios = require("axios");
const registry = require("./registory.json");
const fs = require("fs");

router.all("/:apiName/:path", (req, res) => {
    if (registry.services[req.params.apiName]) {
        console.log({
            method: req.method,
            url: registry.services[req.params.apiName].url + req.params.path,
            headers: req.headers,
            data: req.body,
        });
        axios({
            method: req.method,
            url: registry.services[req.params.apiName].url + req.params.path,
            data: req.body,
        })
            .then((response) => {
                res.send(response.data);
            })
            .catch((err) => {
                res.send(err.message);
            });
    } else {
        res.send("API NAME DOES NOT EXIST");
    }
});

router.post("/register", (req, res) => {
    const registrationInfo = req.body;
    registry.services[registrationInfo.apiName] = { ...registrationInfo };
    console.log(req.body);
    fs.writeFile("./routes/registory.json", JSON.stringify(registry), (error) => {
        if (error) {
            res.send("Could not register " + registrationInfo.apiName + "'\n" + error);
        } else {
            res.send("Successfully Registered" + registrationInfo.apiName);
        }
    });
});

module.exports = router;
