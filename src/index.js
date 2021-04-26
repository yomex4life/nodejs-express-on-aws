const express = require('express');

const app = express();
app.disable("x-powered-by");

const port = 3000;
app.get('/', (req, res) =>{
    res.send('<hi>Express demo app</hi><h4>Messafe: Success</h4><p>Version 1.0</p>');
})

app.get('/products', (req, res) =>{
    res.send([
        {
            productId: '101',
            price: 200,
        },
        {
            productId: '102',
            price: 1000,
        }
    ])
})

app.listen(port, () =>{
    console.log("Demo app launched")
})