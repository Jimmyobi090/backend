const express = require ("express");
const dotenv = require ("dotenv");
const routes = require ("./routes");
const dbConnect = require("./db");

dotenv.config()
const app = express()

app.use(express.json())
app.use("/api", routes)

// const URL = process.env.MONGODB_URL
// mongoose.connect(URL, ()=>{
//     console.log("Database Connected")
// })

dbConnect()

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`Server has started running on ${PORT}`)
})

app.get("/", (req, res)=>{
    res.json({msg: "Welcome to our Backend App"})
})