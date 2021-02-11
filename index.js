const dotenv = require('dotenv').config()
const express = require('express');

const app = express();
const port = process.env.PORT || 8000
// app.use(json());


app.use("/", (_, res) => {
    res.json({ data: "IT'S ALIVE!" })
})


app.listen(port, () => {
    console.log(`server is alive on port ${port}`)
})