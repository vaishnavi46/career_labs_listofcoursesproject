const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/carrer_labs_list_of_courses'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/carrer_labs_list_of_courses/'}),
);

app.listen(process.env.PORT || 8080);



