const {Comment} = require('../models');

const commentData =[
    {
        comment_content:"WELCOME to lacks, enjoy your stay! Feel free to create threads/comments etc",
        parent_post:1,
        user_id:1,
    },
];

const seedComments = async () => await Comment.bulkCreate(commentData);

module.exports = seedComments;
