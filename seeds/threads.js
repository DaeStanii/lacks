const Thread = require('../models/Thread');

const threadData = [
    {
        id:1,
        thread_title: 'WELCOME to lackS',
        user_id:1,
    },
    {
        thread_title: 'CSS',
        user_id:4,
    },
    {
        thread_title: 'Javascript',
        user_id:3,
    },
    {
        thread_title: 'tutorial on how to make awesome CSS like, really fast bro',
        user_id:3,
    },
    {
        thread_title: 'CAN I GET A TA IN HERE PLZ',
        user_id:2,
    },
    {
        thread_title: 'Homework Studygroup!',
        user_id:5,
    },
]

const seedThreads = async () => await Thread.bulkCreate(threadData);

module.exports = seedThreads;