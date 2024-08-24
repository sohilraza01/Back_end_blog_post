const expres = require('express');
const BlogPost = require('../models/blogPost');
const router = expres.Router();


router.get('/',(req,res)=>{
    BlogPost.find().sort({createdAt: -1})
    .then((data)=>{
        console.log('inside the data');
        res.json({message:'data is success',data});
        console.log('Data find Success');
    })
    .catch((err)=>{
        console.log("Error :",err.message);
        res.status(404).send('Data not Found');
    })
})



router.get('/:id',(req,res)=>{
    BlogPost.findById(req.params.id)
    .then((data)=>{
        res.json({data});
        console.log(`Found By id Success`);

       
    })
    .catch((err)=>{
        console.log("Error :",err)
        res.status(404).send('Blog not found')

    })
    
})


router.post('/',(req,res)=>{
    const blogData = req.body;
    const blogObj = new  BlogPost(blogData);
    blogObj.save()
    .then((response)=>{
        console.log(`New Data Added`);
        res.json({response});
    })
    .catch((err)=>{
        console.log('Error :',err.message)
        res.status(404).send('Data not Found at this time !');
    })
})



router.delete('/:id',(req,res)=>{
    BlogPost.findByIdAndDelete(req.param.id)
    .then((result)=>{
        res.json({result});
        console.log(`The Api deleted successfully`);
    })
    .catch((err)=>{
        res.status(404).send('Not deleted Successfully');
        console.log('Error :',err.message);

    })
})





module.exports = router;
