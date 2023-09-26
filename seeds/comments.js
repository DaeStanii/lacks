const {Comment} = require('../models');

const commentData =[
    {
        comment_content:"WELCOME to lacks, enjoy your stay! Feel free to create threads/comments etc",
        parent_post:1,
        created_by:1,
    },
];

const seedComments = async () => await Comment.bulkCreate(postData);

module.exports = seedComments;
