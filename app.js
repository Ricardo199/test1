const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const posts = [
    { title: 'Learning EJS', author: 'Jane' },
    { title: 'Node.js Tips', author: 'John' },
    { title: 'Programming for College', author: 'Doe' },
    { title: 'Programming for Beginners', author: 'Alice' }
];

app.get('/', (req, res) => {
    // Render the index page with posts
    res.render('index', { posts });
});

app.post('/add', (req, res) => {
    const { title, author } = req.body;
    posts.push({ title, author });
    res.redirect('/');
    console.log(req.body);
});

app.listen(3000, () => console.log('Server is running on port 3000'));