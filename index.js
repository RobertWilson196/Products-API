const express = require('express');
const serverApp = express();

const PORT = process.env.PORT || 5000; // process.env.PORT is necessary for Heroku deployment

serverApp.get('/', (req, res) => {
    res.send('Something brand new');
});

serverApp.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});
