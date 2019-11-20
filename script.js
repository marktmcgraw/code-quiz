let currentQuestionIndex = 0

function initGame(){
    const startButtonEL = document.querySelector("button");
    console.log("button");
    const startContainerEl = document.getElementById("start-container");
    console.log("start");
    const gameContainerEl = document.getElementById("game-container");
    
    function startGame(){
    
        startContainerEl.setAttribute("class", "container d-none");
        gameContainerEl.setAttribute("class", "container");
        // getQuestion()
        
    }
    
    startButtonEL.addEventListener ("click", startGame);

    }
function getQuestion(){
//
const currentQuestion = questions[currentQuestionIndex];
// display title of current question in div on HTML page
// loop over choices and for each element in choices, create a button
// add to button: function "on click" : if choice matches, vs if choice doesn't match
// different function: then call next question

}


    initGame();