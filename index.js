const express = require("express")
require("dotenv").config({ path: "./.env" })
const cors = require("cors")
const mongoose = require("mongoose")
const { addTodo, getTodo, updateTodo, deleteTodo } = require("./controlllers/todocontroller")
mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())
app.use(cors())
app.post("/todo/add", addTodo)
app.get("/todo", getTodo)
app.put("/todo/:id", updateTodo)
app.delete("/todo/:id", deleteTodo)

mongoose.connection.once("open", () => {
    console.log("DB Connected")
    app.listen(5000, console.log("http://localhost:5000"))
})



//railway.app
// render.io
//vercel.com
