const express = require("express")
const morgan = require("morgan")
require("express-async-errors")
require('dotenv').config()
require("./db")
const userRouter = require("./routes/user")
const { errorHandler } = require("./middlewares/error")

const app = express();
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/user", userRouter);

app.use(errorHandler)

// app.post("sign-in", (req, res, next) => {
//     const { email, password } = req.body;
//     if (!email || !password)
//         return res.json({ error: "email/password missing" });
//     next();
// })

// app.get("/", (req, res) => {
//     res.send("<h1>Backend server</h1>")
// })


// app.get("/about", (req, res) => {
//     res.send("<h1>Backend server About</h1>")
// })
port = 8000
app.listen(8000, () => {
    console.log(`listen on port ${port}`);
})