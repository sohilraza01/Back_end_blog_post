const express = require('express');
const mongoose = require('mongoose');
const blogPost = require('./models/blogPost');
const BlogRoute = require('./Router/blogRoutes');
const cors = require('cors');

const USERNAME = 'sohilraza';
const PASSWORD = 'sohilraza';
const DB_NAME = 'Data_With_React';
const DB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@merncluster.edugr.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=mernCluster`
const port = 3060;
const app = express();


app.use(express.static('build'));

mongoose.connect(DB_URI)
.then((result)=>{
    console.log('Database is Connected');
    app.listen(port,(req,res)=>{
        console.log(`The Server is Run at port ${port}`);
    });
})
.catch((err)=>{
    console.log("Error :",err);
    process.exit(1);
})

app.use(express.json());
app.use(cors());




app.get('/',(req,res)=>{
    res.send({message:"home page"});
})

// roter middleware :

app.use('/blogs',BlogRoute)
















