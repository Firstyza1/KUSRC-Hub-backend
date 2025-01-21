const express = require('express')
const app = express();
app.use(express.json());
const { readdirSync } = require('fs')
readdirSync('./Routes')
    .map((r) => app.use(require('./Routes/' + r)))

app.listen(3000, () => console.log('Server is Running 3000'))