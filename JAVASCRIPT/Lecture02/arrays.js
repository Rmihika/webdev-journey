//LOOPS WITH ARRAYS//

let fruits = ["apple", "banana", "mango", "grapes", "kiwi"];

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}


//NESTED LOOPS WITH ARRAYS//

let heroes = [["ironman", "spiderman", "thor"],
 ["superman", "wonder woman", "flash"]];

 for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
 }


 //FOR OF LOOP WITH ARRAYS//

 let studs= ["mihika", "neha", "riya", "siya"];
 for(students of studs){
    console.log(students);
 }

 //NESTED FOR OFF LOOP WITHA ARRAYS//

 let heroes2 = [["ironman", "spiderman", "thor"],
 ["superman", "wonder woman", "flash"]];

 for(list of heroes2){
    for(name of list){
        console.log(name);
    }
 }