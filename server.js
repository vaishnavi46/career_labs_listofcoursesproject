const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/career_labs_listofcoursesproject'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/career_labs_listofcoursesproject/'}),
);

app.listen(process.env.PORT || 8080);



