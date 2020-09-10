const Qnmodel = require('../models/Question');

//list all Qns from db
module.exports.home_get = (req, res) => {
  Qnmodel.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err.message);
    })
}
//list a Qn from db
module.exports.qn_get = (req, res) => {
  Qnmodel.findById({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err.message);
    })
}
//delete a Qn from db
module.exports.delete_get = (req, res) => {
  Qnmodel.findByIdAndDelete({ _id: req.params.id })
    .then((result) => {
      res.json('Record deleted')
    })
    .catch((err) => {
      res.send(err.message);
    })
};
//create question
module.exports.create_post = (req, res) => {
  const { username, question, answer} = req.body;
  let newQn = new Qnmodel({
    username: username,
    question: question,
    answer: answer
  })
  newQn.save()
    .then((newQn) => {
      res.json(newQn);
    })
    .catch((err) => {
      res.send(err.message);
    })
};