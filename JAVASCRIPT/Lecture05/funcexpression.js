let name = "mihika";

let sum= function (a,b){
    return a+b;
}


//-----HIGH ORDER FUCNTION-----//
let hello = function(){
    console.log("hello");
}

function multiplegreet (func, count){
    for(let i=1;i<=count;i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multiplegreet(greet, 5);