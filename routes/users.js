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

const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    res.render('books', { books});
})
module.exports=router;