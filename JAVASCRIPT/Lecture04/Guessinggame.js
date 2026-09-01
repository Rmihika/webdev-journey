const max=prompt("enter a maximum number");


let random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess =prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("you quit the game");
        break;
    }

    if(guess==random){
        console.log("you guessed it right!");
        break;

    }else if(guess<random){
        guess =prompt("hint: guess is too small");
    } else if(guess>random){
        guess =prompt("hint: guess is too large");
    }
//     }else{
//     guess =prompt("guess was wrong, pls try again");
// }
}