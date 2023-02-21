const express = require('express');
const router = express.Router();
let books = [
    {
        author: "Chinua Achebe",
        title: "Things Fall Apart",
        language: "English",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        pages: 209,
        year: 1958
    },
    {
        author: "Chinua Achebe",
        title: "Things Fall Apart",
        language: "English",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        pages: 209,
        year: 1958
    },
    {
        author: "Chinua Achebe",
        title: "Things Fall Apart",
        language: "English",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        pages: 209,
        year: 1958
    },
    {
        author: "Chinua Achebe",
        title: "Things Fall Apart",
        language: "English",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        pages: 209,
        year: 1958
    },
    {
        author: "Chinua Achebe",
        title: "Things Fall Apart",
        language: "English",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        pages: 209,
        year: 1958
    },
    {
        author: "Chinua Achebe",
        title: "Things Fall Apart",
        language: "English",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        pages: 209,
        year: 1958
    },
    {
        author: "Chinua Achebe",
        title: "Things Fall Apart",
        language: "English",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        pages: 209,
        year: 1958
    },
    {
        author: "Chinua Achebe",
        title: "Things Fall Apart",
        language: "English",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        pages: 209,
        year: 1958
    }
]
let adminData = [
    {
        name: 'Abc1',
        id: 1,
        email:"abc1@gmail.com",
        age:30
    },
    {
        name: 'Abc2',
        id: 2,
        email:"abc2@gmail.com",
        age:30
    },
    {
        name: 'Abc3',
        id: 3,
        email:"abc3@gmail.com",
        age:30
    },
]
router.get('/', (req, res) => {
    res.render('admin', { adminData });
})
router.get('/books', (req, res) => {
    res.render('books', { books });
})

module.exports = router;