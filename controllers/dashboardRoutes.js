const router = require('express').Router();
const { Users } = require('../models');
const withAuth = require('../utils/auth.js');

// // root/dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await Users.findByPk(req.session.user_id, {
            attributes: { exclude: ['password', 'email']
        },  
            
        }); console.log(userData)
        let gameData = await userData.getUserChoices();
        let games = gameData.map(game => game.get({plain:true}))

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            games,
            logged_in: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;