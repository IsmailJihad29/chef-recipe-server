const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
const port = process.env.port || 5000;

const chefsRecipes = require('./data/recipies.json')

app.get('/', (req, res) => {
    res.send("Are You Hungry Have a bite of Our Special Biriyaaaaaaaani!!!");
})

app.get('/chefsRecipes', (req, res) => { 
    res.send(chefsRecipes)
})

app.listen(port, () => {
    console.log(`Hey Your Biriyaaani Is Running on port:${port}`)
});