const favmovie= "avatar";
let guess =prompt("What is your favorite movie?");

while((guess!=favmovie) && (guess!="quit")){
    
    guess = prompt("What is your favorite movie?");
}

if(guess==favmovie){
    console.log("You guessed it right");
}