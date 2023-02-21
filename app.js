const express = require('express');
const app = express();
const adminRouter = require('./routes/admin')
const usersRouter = require('./routes/users')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/admin', adminRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.render('index');
})

let portnumber = 5000;
app.listen(portnumber, 'localhost', () => {
    console.log(`http://localhost:${portnumber}`);
});

