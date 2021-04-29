const express = require('express');

const app = express();
app.disable("x-powered-by");

const port = 3000;
app.get('/pt', (req, res) =>{
    //res.send('<hi>Express demo app</hi><h4>Messafe: Success</h4><p>Version 1.0</p>');
    res.status(200).json({"message": "Confirm"});
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
        },
        {
            productId: '103',
            price: 6700,
        }
    ])
})

app.listen(port, () =>{
    console.log("Demo app launched")
})

module.exports = app