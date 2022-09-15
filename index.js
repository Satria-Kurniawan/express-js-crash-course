const express = require("express")
const logger = require("./middleware/logger")

const app = express()

// Init Middleware
// app.use(logger)

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

// Member API Routes
app.use("/api/members", require("./routes/api/members"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
