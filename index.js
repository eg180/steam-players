const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors')
const path = require('path')

const app = express();
const port = process.env.PORT || 8000

app.use(cors());
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With", "Content-Type", "Accept");
    next()
})

app.use(express.json()); // only necessary when receiving JSON - not outputting (req)
app.use(express.static(path.join(__dirname, "client/build"))) // express.static() tells it what path / static page to run when pg loads
// foobar.herokuapp.com/client // WHERE IT STARTS

app.use("/api/*", (_, res) => {
    res.json({ data: "IT'S ALIVE!" })
})

app.use("*", (_, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html")) // SENDS THIS AS INITIAL PAGE
})


app.listen(port, () => {
    console.log(`server is alive on port ${port}`)
})