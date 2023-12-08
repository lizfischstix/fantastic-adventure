
const getReviewForm = (event) => {
    event.preventDefault();
    const gameId = event.target.value;

    window.location.replace(`/game/${gameId}`);
}
