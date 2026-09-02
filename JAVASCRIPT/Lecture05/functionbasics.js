// function hello()
// {
//     console.log("hello");
// }


// function printName(){
//     console.log("college");
//     console.log("mihika");
// }

// printName();

// function print1to5(){
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }


// print1to5();

// function  isAdult(){
//     let age=prompt("enter your age");
//     if(age>=18){
//         console.log("you are an adult");
//     }else{
//         console.log("you are a minor");
//     }
// }

// isAdult();

// function printName(name){
//     console.log(name);
// }

// printName("mihika");
// printName("mihika");

// function  printInfo(name,age){
//     console.log(`name is ${name} and ${name}'s age is ${age}`);
// }

// printInfo("Mihika", 20);

// function add(a,b){
//     let sum=a+b;
//     console.log(`sum of ${a} and ${b} is ${sum}`);
// }

// add(5,2);

// //average of 3 numbers

// function average(a,b,c){
//     let avg=(a+b+c)/3;
//     console.log(`average of ${a},${b} and ${c} is ${avg}`);
// }

// average(5,10,15);

// //print multiplication table of a number

// function table(n){
//     for(let i=1; i<=10; i++){
//         console.log(`${n} x ${i} = ${n*i}`);
//     }
// }

// table(5);

// //1 to n

// function print1toN(n){
//     let sum=0
//     for(let i=1;i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(print1toN(5));

let str=["hi", "hello", "bye", "hey"];
function concat(str){
    let concatresult="";
    for(let i=0;i<str.length;i++){
        concatresult += str[i];
    }
    return concatresult;
}

concat(str);
console.log(concat(str));