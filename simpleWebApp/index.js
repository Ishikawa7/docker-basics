const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Ciao bello NUOVA FUNZIONALITà');
})

app.listen(8080, () => {
    console.log('listening on port 8080');
})