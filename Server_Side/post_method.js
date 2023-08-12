const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());
const app = express()
const port = 3000

// web pages displaying eg login page

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static','html.html'));
});

// getting the login info 
app.post('/', (req, res) => {
    console.log(req.body);
    // database work here
    // form work from the html file in accrod
    res.json({success: true});
    res.send('success with');
    
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


