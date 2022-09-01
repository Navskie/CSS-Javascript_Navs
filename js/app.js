//alert("hello");
// console.log("HEllo");
// console.warn("hi Warning");
// console.error("Hello Error");

// VARIABLES 
// var Name = "Juan";
// const Name = "Dela";
// let Name = "Pedro";

// console.log(Name);


// DATA TYPES
// string, numbers, boolean, null, undifined

// const Name = "Pedro";
// const Age = 19;
// const Rating = 49.3;
// const isComplete = true;
// const Val = null;
// const unk = undefined;

// let Library;

// Library = "Manila Library";

// console.log(typeof Name);
// console.log(typeof Library);

// Concat
// let String = "My "+ Name +" and my "+Age+"";
// console.log(String);
// let String = `My name is ${Name} and my age is ${Age}`;
// console.log(String);

// console.log(Name.length);
// console.log(Name.toLocaleLowerCase(Name));
// console.log(Name.toLocaleUpperCase(Name));

// ARRAYS
// const Fruits = ["Mangga", "Ubas", "Banana", "Pineaple"];

// Fruits[4] = "Santol";
// Fruits.push('Santol');
// Fruits.unshift('Santol');
// Fruits.pop();

// console.log(Fruits);
// console.log(Array.isArray(Fruits));
// console.log(Fruits.indexOf("Ubas"));
// Fruits.splice(2, 1);
// console.log(Fruits);

// OBJECT LITERAL (advanced)
// const tao = {

//   firstName: 'Pedro',
//   lastName: 'Dela Cruz',
//   age: 35,
//   hobby: ['Computer', 'Games', 'Dancing', 'Tiktok'],
//   familyMembers: {
//     father: 'Juan Sr',
//     mother: 'Julia Smith',
//     sister: 'Nana'
//   }

// }

// console.log(tao);
// console.log(tao.firstName, tao.lastName);
// console.log(tao.hobby[2]);
// console.log(tao.familyMembers.mother);

// const Contact = [
//   {
//     id: 1,
//     fname: "Pedro Penduko",
//     isSaved: "Phone",
//   },
//   {
//     id: 2,
//     fname: "Juan Penduko",
//     isSaved: "Memory",
//   },
//   {
//     id: 3,
//     fname: "Janice Penduko",
//     isSaved: "SD",
//   },
// ];

// console.log(Contact);
// console.log(Contact[1].fname);

//for loop
// for (let i = 0; i < Contact.length; i++) {
//   console.log(Contact[i].isSaved);
// }

// while
// let b = 0;
// while (b <= 10) {
//   console.log('while loop count ${b}');
//   b++;
// }

// for (let list of Contact) {
//   console.log(list.fname);
// }

// Contact.forEach(function(contacts) {
//   console.log(contacts)
// });

// const ContactFullname = Contact.map 
// (function(Contacts) {
//   return Contacts.fname;
// });
// console.log(ContactFullname);

// const ContactFullname = Contact.filter 
// (function(Contacts) {
//   return Contacts.isSaved == "SD";
// });
// console.log(ContactFullname);

// JSON
// const ContactJSON = JSON.stringify(Contact);
// console.log(ContactJSON);

// conditionals
// const x = "100";
// // === means same datatype
// // || or
// // && AND 
// if (x != 100) {
//   console.log("is 100");
// } else if (x > 200) {  
//   console.log("not 100");
// }

// FUNCTION AND TYPES
// let x = 100;
// let y = 200;
// function GetSum(x, y) {
//   return x + y;
// }
// console.log(GetSum(500, 700));

// const GetSum = (x, y) => {
//   return x+y;
// }
// const GetSum = (x, y) => x+y;
// const GetSum = x => x+200;

// console.log(GetSum(500, 700));


// OOP
// constructor
// function Juan(fName, lName, bb) {
//   this.fName = fName;
//   this.lName = lName;
//   this.bb = bb;

//   this.getFullName = () => {
//     return `${this.fName} ${this.bb}`;
//   } 

// }
// class
// class Juan {
//   constructor(fName, lName, bb) {
//     this.fName = fName;
//     this.lName = lName;
//     this.bb = bb;
//   }
//   getFullName() {
//     return `${this.fName} ${this.bb}`;
//   }
// }

// const Tao = new Juan('Pedro', 'Penduko', 'Ungas');
// const Tao2 = new Juan('Jose', 'Dela Cruz', 'Ungas');

// console.log(Tao);
// console.log(Tao.fName);
// console.log(Tao.getFullName());