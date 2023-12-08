const router = require('express').Router();
const { Games } = require('../../models');

// root/api/games/:id
router.get('/:id', async (req, res) => {
    try {
        const gameData = await Games.findByPk(req.params.id);

        const game = gameData.get({ plain: true });
        res.status(200).json(game);
        // res.render('games', {
        //     ...game,
        //     logged_in: req.session.logged_in
        // });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Search by title - root/api/games/titlesearch/:title
router.get('/titlesearch/:title', async (req, res) => {
    try {
      const getByTitle = await Games.findAll({
        where: {
          title: req.params.title,
        }
      })
      res.status(200).json(getByTitle);

    } catch (err) {
      res.status(500).json(err);
  }
  });
  
  // Search by genre - root/api/games/genresearch
  router.get('/genresearch/:genre', async (req, res) => {
    try {
      const genreString = req.query.genre;
      const genreArray = genreString.split(',');
      // console.log(genreArray)
      for (let i = 0; i < genreArray.length; i++) {
        var getByGenre = await Games.findAll({
          where: {
            genre: genreArray[i]
          },
        })
      };
      res.status(200).json(getByGenre);
    } catch (err) {
      res.status(500).json(err);
  }
  });

module.exports = router;