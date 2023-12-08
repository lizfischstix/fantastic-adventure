const reviewFormHandler = async (event) => {
    event.preventDefault();

    const currentUrl = window.location.href;
    const match = currentUrl.match(/\/game\/(\d+)/);
    const gamenumberValue = parseInt(match[1], 10);
    const game_id = gamenumberValue;
    const text = document.getElementById('reviewBody').value.trim();
    const stars = document.getElementById('starRating').value;

    if (game_id && text && stars) {

        const response = await fetch('/api/reviews/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    game_id: game_id,
                    text: text,
                    stars: stars
                }),
                headers: { 'Content-Type': 'application/json' },
            })
        if (response.ok) {
            window.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }


}

document.getElementById('reviewForm').addEventListener('submit', reviewFormHandler);