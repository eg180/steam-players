const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 8000

app.use(cors());
app.use(express.json()); // only necessary when receiving JSON - not outputting (req)


app.use("/", (_, res) => {
    res.json({ data: "IT'S ALIVE!" })
})


app.listen(port, () => {
    console.log(`server is alive on port ${port}`)
})