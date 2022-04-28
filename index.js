const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Node!  Run to browser')
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01925716395' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01925716395' },
    { id: 3, name: 'suchirata', email: 'suchirata@gmail.com', phone: '01925716395' },
    { id: 4, name: 'sadiya', email: 'sadiya@gmail.com', phone: '01925716395' },
    { id: 5, name: 'aysha', email: 'aysha@gmail.com', phone: '01925716395' },
    { id: 6, name: 'samiha', email: 'samiha@gmail.com', phone: '01925716395' },
    { id: 7, name: 'oishi', email: 'oishi@gmail.com', phone: '01925716395' }
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const match = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(match)
    }
    else {
        res.send(users)
    }

});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('req', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening', port);
})