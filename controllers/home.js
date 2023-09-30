const router = require('express').Router();
const {Thread, User, Comment} = require('../models');
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      console.log("is this looping? -logged out");
      res.render('login');
    } else {
      next();
    }
  };

router.get('/', async (req, res) => {


    res.render('login');
    
});


router.get('/signup', async (req, res) => {


    res.render('signup');

});

router.get('/home', withAuth, async (req, res) => {
    const allThreads = await Thread.findAll({
        include:[{model:User},{model:Comment}],
        attributes:{exclude:['password']},
    });
    const threads = allThreads.map((thread) => thread.get({ plain: true }));

    //this is for debugging with insomnia
    //res.status(200).json(threads);

    if (req.session.logged_in) {
        res.render('home', threads);
    } else {
        res.render('home');
    }
});

router.get('/login', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('home', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;