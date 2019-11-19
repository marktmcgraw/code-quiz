function initGame(){
    const startButtonEL = document.querySelector("button");
    console.log("button");
    const startContainerEl = document.getElementById("start-container");
    console.log("start");
    const gameContainerEl = document.getElementById("game-container");
    
    function startGame(){
    
        startContainerEl.setAttribute("class", "container d-none");
        gameContainerEl.setAttribute("class", "container");
    }
    
    startButtonEL.addEventListener ("click", startGame);

    }
    initGame();