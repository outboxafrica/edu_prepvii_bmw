const CommentModel = require('../models/Comments');



//-----------------------------Comments------------------------------------//

   module.exports.post_comments = (req,res) =>{
     try{
       const {comment} = req.body;

       if(!comment){ 
        return res.status(400).json({ msg: 'Field is Empty' });
       }
       
       const newComment = new CommentModel({
         comment,
         userId:req.user
       });

       newComment.save()
       .then((result) =>{
         res.json(result);
       })
     }

     catch(err){
      res.status(500).json({ error: err.message })
     }
  
    }

    //------------------------Get-Comments------------------------------------//

    module.exports.get_comments = async(req,res) =>{
    CommentModel.find({userId:req.user})
     .then((result) =>{
      res.json(result)
     })
    }
