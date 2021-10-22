const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Wow nice initiation of node and express')
})

const users = [
    { id: 0, name: 'shakil', mail: 'shakilkhan.eau' },
    { id: 1, name: 'ferdus', mail: 'shakilkhan.eau' },
    { id: 2, name: 'miraj', mail: 'shakilkhan.eau' },
    { id: 3, name: 'kuldun', mail: 'shakilkhan.eau' },
    { id: 4, name: 'kuldun', mail: 'shakilkhan.eau' }
]

app.get('/users', (req, res) => {
    console.log(req.query.search)
    // search query parms
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
    res.send(users)
});

// send to server data {etake app.Method bola hoy}
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// dynamic params or apit
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'jackFruits'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammi fazli mango')
})

app.listen(port, () => {
    console.log('listening to port', port)
});

// there are some error in my code.  