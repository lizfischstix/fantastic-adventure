const genreChoices = document.querySelectorAll('.form-check-input');
const selectedGenres = [];

genreChoices.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            selectedGenres.push(checkbox.value);
        } else {
            const index = selectedGenres.indexOf(checkbox.value);
            if (index > -1) {
                selectedGenres.splice(index, 1);
            }
        }
    });
});

// console.log(selectedGenres) // simple string array
const titleSearchFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the search form
    const title = document.getElementById('titleSearchInput').value.trim();

    if (title) {
        // Send a GET request to the API endpoint
        const response = await fetch(`/api/games/titlesearch/${title}`, {
            method: 'GET',
        });

        if (response.ok) {
            const data = await response.json();
            const redirectUrl = `/gamesearch/title?game=${encodeURIComponent(JSON.stringify(data))}`;
            window.location.replace(redirectUrl);

        } else {
            alert(response.statusText);
        }
    }
};

const genreSearchFormHandler = async (event) => {
    event.preventDefault();
    // Convert the selectedGenres array to a comma-separated string
    const selectedGenresString = selectedGenres.join(',');
    if (selectedGenresString) {
        // Send a GET request to the API endpoint
        const response = await fetch(`/api/games/genresearch/genre?genre=${selectedGenresString}`, {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            const redirectUrl = `/gamesearch/genre?genre=${encodeURIComponent(JSON.stringify(data))}`;
            window.location.replace(redirectUrl);
        }
         else {
            alert(response.statusText);
        }
    }
};

document.getElementById('titleSearchForm').addEventListener('submit', titleSearchFormHandler);

document.getElementById('genreSearchForm').addEventListener('submit', genreSearchFormHandler);