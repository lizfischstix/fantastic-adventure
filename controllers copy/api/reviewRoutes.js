const express = require('express');
const router = express.Router();
const { Reviews } = require('../../models');
const withAuth = require('../../utils/auth.js');

// POST route to create a new review, using Auth to check if the user is logged in
router.post('/new', withAuth, async (req, res) => {
  try {
    const user_id = req.session.user_id;
    
    const { game_id, text, stars } = req.body;
    // console.log(user_id, game_id, text, stars);
    
    
    // Create a new review
    const newReview = await Reviews.create({
      user_id: user_id,
      game_id: game_id,
      text: text,
      stars: stars
    });
   const reviewId = newReview.id;
    res.status(201).json({ review: newReview, id: reviewId});
  } catch (err) {
    res.status(500).json({ err: 'Uh oh! Review not created, please try again.' });
  }
});

// DELETE route to delete a review by ID
router.delete('/:id', async (req, res) => {
  try {
    const reviewId = req.params.id;

    // Destroy the review using Sequelize model
    const deletedReview = await Reviews.destroy({
      where: {
        id: reviewId,
        user_id: req.session.user_id
      }
    });

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found. Please try again.' });
    }

    res.status(200).json({ message: 'Success! Review deleted!' });
  } catch (err) {
    res.status(500).json({ err: 'Failed to delete the review. Please try again.' });
  }
});

module.exports = router;