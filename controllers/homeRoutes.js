const router = require('express').Router();
const { Games } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const allGames = await Games.findAll({
      attributes: ['thumbnail'],
    });
    const gameInfo = allGames.map((game) => game.get({ plain: true }));

    const shuffledGames = shuffleArray(gameInfo);

    const selectedGames = shuffledGames.slice(0, 6);

    const carouselGames = selectedGames.map(obj => obj.thumbnail);
    // carouselGames.unshift('https://media.istockphoto.com/id/1320799591/vector/game-on-neon-game-controller-or-joystick-for-game-console-on-blue-background.jpg?s=2048x2048&w=is&k=20&c=oQVZJ94lIx_-awFWha4S-0J0ZnpZ7JEkzflMJlX79vA=');

res.render('homepage', {
  carouselGames,
  logged_in: req.session.logged_in
});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route to review a game - /:id
router.get('/game/:id', withAuth, async (req, res) => {
  try {
      const gamesData = await Games.findByPk(req.params.id);
      if (!gamesData) {
          res.status(404).json({ message: 'There is no game with this id.' });
          return;
      }

      const game = gamesData.get({ plain: true });

      res.render('reviews', {
        ...game,
        logged_in: req.session.logged_in,
      })
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  };
});

// Render login/signup page  
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

//Fisher Yates shuffle algorithm (via Stack Overflow)
function shuffleArray(array){
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

module.exports = router;