const router = require('express').Router();
const {User} = require('../../models');

router.get('/currentuser', async (req, res) => {
    const currentUser = {
        username:req.session.username,
        user_id:req.session.user_id
    };

    res.json(currentUser);

});

module.exports = router;