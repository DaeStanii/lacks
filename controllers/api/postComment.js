const router = require('express').Router();
const {Comment} = require('../../models');

router.post('/comment', async (req, res) => {
    
    try {
        if (!req.body.comment_content) {
            res.status(400).json({message:"no comment content received"});
            return;
        } else if (!req.body.parent_post) {
            res.status(400).json({message:"no parent thread received"});
            return;
        } else if (!req.body.user_id) {
            res.status(400).json({message:"no user_id received"});
            return;
        }

        const newComment = await Comment.create({
            comment_content: req.body.comment_content,
            parent_post:req.body.parent_post,
            user_id:req.body.user_id
        });

        res.status(200).json(newComment);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

module.exports = router;