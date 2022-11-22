const express = require("express");


const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
    res.json({
        "naples_locations": [["Baker Park", 
            "1433 2nd Ave S, Naples, FL 34102",
            "Baker Park is a large park lined mostly with concrete pathways. Easily skateable, lots of areas for flatground tricks."],
            ["Naples Test Location 2:"]],
        "ft_myers_locations": ["Fort Myers Test Location 1\n:", "Fort Myers Test Location 2:"]    });

});


app.listen(PORT, () => {
    console.log(PORT);

});