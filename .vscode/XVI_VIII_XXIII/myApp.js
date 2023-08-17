const express = require('express');
const app = express();
const id = require('uuid');
const uuid = id();
const hash = require('bcrypt');
const bcrypt = hash();
const port = 3000;

const data = [{
    name: 'avraham',
    id: uuid,
    email: 'avi@example.com'
},{
    name: 'yitzak',
    id: uuid,
    email:'yitzik@example.com'
},{
    name:'jeycob',
    id:uuid,
    email:'jek@example.com'
}]

app.get('/', (req, res) => {
    res.send(data);
});
​app.get('/user/:id', (req, res) => {
    const id = req.params.id;
     user = data.filter(user => data.user.id === id);
    res.send(user);
});
app.post('/user/:name/:email',(req, res) =>{
    data.push({
        name: req.params.name,
        email:req.params.email
    });
    res.send(data);
});
app.put('/user/:id/:name/:email', (req, res)=>{
    const id = req.params.id;
    const user = data.filter(user => data.user.id === id);
    user.name = req.params.name;
    user.email = req.params.email;
    res.send(user);
});
app.delete('/user/:id', (req,res) => {
    const id = req.params.id;
    user = data.filter(user => data.user.id === id);
    const position = data.indexOf(user);
    data.splice(position, 1);
    res.send(data);
})
app.listen(port, () => {
console.log(`Server is up and running on port:${port}`);
});