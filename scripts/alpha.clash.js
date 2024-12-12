//function play(){
    //step-1: hide the home screen , to hide the screen add the class hidden to the home section
  //  const homeSection= document.getElementById('home-screen');
  //  homeSection.classList.add('hidden');


   // const playgroundSection = document.getElementById('play-ground');
   // playgroundSection.classList.remove('hidden')
//}

function  handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);

    //stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //console.log(playerPressed,expectedAlphabet);


    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a poin');

        const currentScore = getTextElementValueById('current-score')
        //console.log(currentScore);

         //increase the score by 1
         const newScore = currentScore + 1;
         setTextElementValueById('current-score',newScore );

         //-------------------------------
        //update score:
       // const currentScoreElement = document.getElementById('current-score')
       // const currentScoreText = currentScoreElement.innerText;
       // const currentScore = parseInt(currentScoreText);
       
        


       
         
        //show the update score
        //currentScoreElement.innerText = newScore;



        console.log(' you have pressed correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed.you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const newlife = currentLife - 1;
        setTextElementValueById('current-life',newlife);





        //--------------------------------------------
        // get the current life number
        //const currentLifeElement = document.getElementById('current-life');
       // const currentLifeText = currentLifeElement.innerText;
        //const currentLife = parseInt(currentLifeText);


        //reduce the life count
       // const newlife = currentLife - 1;

        if(newlife === 0)
        {
            gameOver();
        }

        //display/show  the updated life count

       //currentLifeElement.innerText = newlife;
    }

}

//capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress);



function continueGame(){
    const alphabet = getARandomAlaphabet();  
    ///console.log('your random alphabet', alphabet);  
    
    //set randomly generated alphabet  to the screen (show it)
    const currentAlphabetElement= document.getElementById('current-alphabet')
     currentAlphabetElement.innerText=alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}


function play(){
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //update final score
    // get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);


    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}