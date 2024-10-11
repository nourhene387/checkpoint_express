const express = require('express');
const app = express();
const PORT = 3001;

/******************time ************* */



const myLogger = function (req, res, next) {

    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    console.log(hours)


    if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
        next();
    } else {
        return res.status(403).send("The application is only available during working hours (Monday to Friday, 9 AM - 5 PM).");
    }

}

//module.exports = time;

app.use(myLogger);

/*****************************Routes**********/
app.use(express.static(__dirname + "/views"))

app.get('/', (req, res) => {
    // res.render('home');
    res.sendfile(__dirname + '/views/home.html');
});
app.post('/', function (req, res) {

    res.send('POST request to the homepage');

})

app.get('/services', (req, res) => {
    // res.render('services');
    res.sendfile(__dirname + '/views/Services.html');
});
app.post('/services', function (req, res) {

    res.send('POST request to the homepage');

})

app.get('/contact', (req, res) => {
    // res.render('contact');
    res.sendfile(__dirname + '/views/contact.html');
});
app.post('/contact', function (req, res) {

    res.send('POST request to the homepage');

})

/*********************Start the server*****************/

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



