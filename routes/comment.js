const express = require('express');
const auth = require('../auth/auth');

const userModel = require('../schema/userModel');

const router = express.Router();

//create comments
router.route('/add').post(auth, async(req, res) => {
    const user = req.user;
    
    await userModel.findOneAndUpdate({email: user.email}, {
        $push: {
            comments: req.body.comment
        }
    }).then(() => res.json('comment added!'))
      .catch((err) => console.log(err));
});

//get all comments
router.route('/').get(auth, async(req,res) => {
    await userModel.find()
             .then((user) => res.json(user))
             .catch((err) => console.log(err));
});

//get specific comments
router.route('/:id').get(auth, async(req,res) => {
    await userModel.findById(req.params.id)
             .then((user) => res.json(user))
             .catch((err) => console.log(err));
});

module.exports = router;