const post ={
    username: "@mihikaraut",
    content: "This is my #firstpost",
    likes:50,
    reposts:5,
    tags: ["@apnacollege", "@delts"]
};

//----GET VALUES----//

let student={
    name:"mihika",
    age:20,
    rollno:123,
};

//TO ACCESS THE VALUES OF OBJECTS 
// WE CAN USE DOT NOTATION OR SQUARE BRACKET NOTATION
student["name"];
student.name;

//---ADD OR UPDATE VALUES---//

const Student ={
    name:"mihika",
    age:20,
    marks:90.4,
    city:"pune"
};

//change city from pune to mumbai
Student.city="mumbai";//update value

//add new property
Student.gender="female";//add new property  

//change marks to A
Student.marks="A"; //marks changed from 90.4 to A