const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use("/api", async (req, res) => {
    res.send("Hello from server")
});


app.listen(8000, () => {
    console.log("Server running at port 8000");
})