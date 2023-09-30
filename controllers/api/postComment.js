const router = require('express').Router();
const {Comment} = require('../../models');

router.post('/comment', async (req, res) => {
    
    try {
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