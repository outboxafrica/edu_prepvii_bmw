const PostModel = require('../models/Posts');




//-----------------------------Posts------------------------------------//

   module.exports.post_posts = (req,res) =>{
     try{
       const {post} = req.body;

       if(!post){ 
        return res.status(400).json({ msg: 'Field is Empty' });
        // console.log(req.id)
       }
   
       const newPost = new PostModel({
         post,
        //  userId:req.user
         userId:req.id
    
       });

       newPost.save()
       .then((result) =>{
         res.json(result);
       })
     }

     catch(err){
      res.status(500).json({ error: err.message })
     }
  
    }

    //------------------------Get-Posts------------------------------------//

    module.exports.get_posts = async(req,res) =>{
    // PostModel.find({userId:req.user})
    PostModel.find({userId:req.id})
     .then((result) =>{
      res.json(result)
     })
    }
//--------------------------Delete-Question----------------------------------//

module.exports.delete_posts = async(req, res) => {

  //validate if user has post to delete
//  const post = await PostModel.findOne({userId:req.user, _id:req.params.id});
 const post = await PostModel.findOne({userId:req.id, _id:req.params.id});
 if(!post){
  return res.status(400).json({ msg: 'Post does not exist with this Id' });
 }
//delete post 
 const deletePost =  await PostModel.findByIdAndDelete(req.params.id);
   res.json(deletePost);

  };