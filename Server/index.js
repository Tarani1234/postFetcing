const express = require('express');
const app =express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('./db/Connection');
const Users = require('./Models/User');

app.post('/', async(req,res)=>{
   let user = new Users(req.body)
   let result = await user.save();
   res.send(result)
    
})
app.listen(4000);
