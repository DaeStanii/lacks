const router = require('express').Router();
const {Thread, User, Comment} = require('../models');

router.get('/', async (req, res) => {


    res.render('login');
    
});


router.get('/signup', async (req, res) => {


    res.render('signup');

});

router.get('/home', async (req, res) => {
    const allThreads = await Thread.findAll({
        include:[{model:User},{model:Comment}],
        attributes:{exclude:['password']},
    });
    const threads = allThreads.map((thread) => thread.get({ plain: true }));

    //this is for debugging with insomnia
    //res.status(200).json(threads);

    if (req.session.loggedIn) {
        res.render('home', threads);
    } else {
        res.render('home');
    }
});



module.exports = router;