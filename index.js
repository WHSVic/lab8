const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;
// allow requests from anywhere
app.use(cors());
// define our api route
// add, sub, div, mult, power, root, square
app.get('/add', (req, res) => {
 const a = parseFloat(req.query.a);
 const b = parseFloat(req.query.b);
 const result = a+b ;
 return res.json({ result: result});
}); 
//app.listen(port,() => {console.log('Server running on'+port)});
