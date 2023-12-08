async function saveGame(e){
    if(e.target.matches('.save-btn')){
        const gameId = e.target.getAttribute('data-gameid');
        console.log(gameId);
        await fetch(`/api/saved/${gameId}`, {
            method: 'POST',
            body:"",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // document.location.reload("/")
    }
    }

document.querySelector("#games-list").addEventListener("click", saveGame);