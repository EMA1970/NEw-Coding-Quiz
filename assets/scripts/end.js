const playerName = document.getElementById('name');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const scoresTx = document.getElementById('finalscore')
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORE = 5
console.log(highScores);


scoresTx.textContent= JSON.parse(mostRecentScore);

playerName.addEventListener("keyup",() => {
    saveScoreBtn.disabled = !playerName.value;
});
saveHighScore = (e) => {
    e.preventDefault()
    
    const score = {
        score: mostRecentScore,
        name: playerName.value
    };
    highScores.push(score);
    
    highScores.sort( (a,b) =>  b.score - a.score)
// only keep the top 5 
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/')

}

