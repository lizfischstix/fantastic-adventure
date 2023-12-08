async function deleteGame(e){
if(e.target.matches('.del-game')){
    const savedId = e.target.getAttribute('data-savedid');
    console.log(savedId);
    await fetch(`/api/saved/${savedId}`, {
        method: 'DELETE'
    })
    document.location.reload("/")
}
    }

document.querySelector("#games-card").addEventListener("click", deleteGame);