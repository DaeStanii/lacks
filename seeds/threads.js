const Thread = require('../models/Thread');

const threadData = [
    {
        thread_title: 'WELCOME to lackS',
        created_by:1,
    },
    {
        thread_title: 'CSS',
        created_by:4,
    },
    {
        thread_title: 'Javascript',
        created_by:3,
    },
    {
        thread_title: 'tutorial on how to make awesome CSS like, really fast bro',
        created_by:3,
    },
    {
        thread_title: 'CAN I GET A TA IN HERE PLZ',
        created_by:2,
    },
    {
        thread_title: 'Homework Studygroup!',
        created_by:5,
    },
]

const seedThreads = async () => await Thread.bulkCreate(threadData);

module.exports = seedThreads;