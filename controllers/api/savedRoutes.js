const express = require('express');
const router = express.Router();
const { Saved } = require('../../models');
const withAuth = require('../../utils/auth.js');
//create a saved game
router.post("save", withAuth, async (req, res) => {
  try{
    const newSaved = await Saved.create({
      ...req.body,
      user_id: req.session.used_id
    })
    res.json(newSaved)
  } catch(err) {
    res.status(500).json(err);
  }
})
// gets all saved data
router.get('/new', withAuth, async (req, res) => {
  try {
      const userId = req.user.id; 

      // Find saved games for the current user
      const newSavedGames = await Saved.findAll({ 
      where: { user_id: userId } 
    });

      res.status(200).json(newSavedGames); // Respond with the list of saved games
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch saved games.' });
  }
});

// create a new saved item
router.post('/:id', withAuth, async (req, res) => {
  try {
    const gameId = req.params.id;
    const userId = req.session.user_id;
  console.log(req.session);
    // Create a new saved game object
    const newSavedGame = {
      user_id: userId, // Change user_id if needed
      game_id: parseInt(gameId), // Use the provided game ID
      favorite: true
    };
console.log(newSavedGame);
    const savedGame = await Saved.create(newSavedGame);

    // const savedId = newSavedGames.id
    res.status(201).json(savedGame); // Respond with the created saved game
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: 'Failed to save the game.' });
  }
});

// delete saved game
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const saveId = req.params.id;
    const userId = req.session.user_id; 

    const deletedGame = await Saved.destroy({
      where: {
        id: saveId,
        user_id: userId,
      },
    });
    console.log(deletedGame);
    if (!deletedGame) {
      return res.status(404).json({ message: 'Game not found in your Saved Collection. Please try again.' });
    }

    res.status(200).json({ message: 'Success! Game removed from Saved Collection!' });
  } catch (err) {
    res.status(500).json({ err: 'Failed to remove the Game from Saved Collection. Please try again.' });
  }
});

module.exports = router;