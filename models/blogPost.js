const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
    type:String,
    required:true
    },  
        

    summary:{
    type:String,
    required:true
    },
    
    content:{
    type:String,
    required:true
    },

    author:{
        type:String,
        required:true
    }
},{timestamps: true}
);

const blogPost = mongoose.model('blogPost',blogSchema,'BlogPost_data_with_React');

module.exports = blogPost;
    