const express = require("express")
require("./db")
const userRouter = require("./routes/user")

const app = express();
app.use(express.json())

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.send("<h1>Backend server</h1>")
})
app.get("/about", (req, res) => {
    res.send("<h1>Backend server About</h1>")
})
port = 8000
app.listen(8000, () => {
    console.log(`listen on port ${port}`);
})