// let str=' mihika ';

// let password=prompt("set your passqors");
// console.log(password.trim());

// let firstname='mihikaa';
// console.log(firstname.toUpperCase());

let msg="IloveCoding";
console.log(msg.indexOf("C")); //5
console.log(msg.indexOf("love")); //1
console.log(msg.indexOf("i")); //8
console.log(msg.indexOf("G")); //-1
console.log(msg.indexOf("o")); //2

let mesg=" hello ";
let newmsg=mesg.trim();
console.log('after trimming', newmsg);
newmsg=newmsg.toUpperCase();
console.log('after uppercase ', newmsg);

// METHOD CHAINING
// let newmsg=msg.trim().toUpperCase();
// console.log(newmsg);

let message="hello";
console.log(message.slice(0,4));

let fruit="mango";
console.log(fruit.repeat(3)); //mangomangomango
