const router = require('express').Router();

// Logout
// Route Works!!
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).redirect('/');
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;