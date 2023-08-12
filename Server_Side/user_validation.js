// using joi
const express = require('express')
const joi = require('joi');
const path = require('path')
const bodyParser = require('body-parser');
const { Result } = require('postcss');
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());
const app = express()
const port = 3000

// web pages displaying eg login page

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html.html'));
});

// getting the login info 
app.post('/', (req, res) => {
    console.log(req.body);
    const schema = joi.object().keys({
        email: joi.string().trim().email().required(),
        password: joi.string().min(5).max(10).required
    });
    joi.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error: " + err.message);
        }
        console.log(result);
        req.send("success");
    });
  
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



