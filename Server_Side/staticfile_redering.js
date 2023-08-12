const express = require('express')
const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'static')));
const app = express()
const port = 3000

// web pages displaying
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static','html.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('./example', (req, res) => {
    res.send('Hello World war 2 !');
});

// users info displa yed
app.get('./example/:name/:age', (req, res) => {
    console.log(req.params);
    res.send("new example user with params");
});