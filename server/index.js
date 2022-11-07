const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json({ "naples_locations": ["TEST_LOCATION1","TEST_LOCATION2"] });

});


app.listen(PORT, () => {
    console.log(PORT);

});