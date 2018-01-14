const express = require('express')
const app = express()

// So scripts can load
app.use(express.static(__dirname + '/'));

// Home Page
app.get('/', (req, res) => res.sendFile('/index.html'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))