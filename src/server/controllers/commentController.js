const CommentModel = require('../models/Comments');
const PostModel = require('../models/Posts');
const UserModle = require('../models/User');



//-----------------------------Comments------------------------------------//

module.exports.post_comments = (req, res) => {
  try {
    const { comment } = req.body;

    if (!comment) {
      return res.status(400).json({ msg: 'Field is Empty' });
    }

    const newComment = new CommentModel({
      comment,

      userId: req.user

    });

    newComment.save()
      .then((result) => {

        return PostModel.findById(req.params.postId);

      })
      .then(existingPost => {
        existingPost.comment.push(newComment)
        existingPost.save();
        res.status(200).json({
          data: newComment
        })
      })

  }

  catch (err) {
    res.status(500).json({ error: err.message })
  }

}

//------------------------Get-Comments------------------------------------//

module.exports.get_comments = async (req, res) => {
  // CommentModel.find({ userId: req.user })

  CommentModel.find()
    .then((result) => {
      res.json(result)
    })
}

module.exports.get_Allcomments = async (req, res) => {
  CommentModel.find({ userId: req.user })


    .then((result) => {
      res.json(result)
    })
}
