
// //This is a basic JS alert!

// alert('Hello!');

// console.log("Hello What's up!");

// console.log(2+2);

// console.log('Hello!');


// var name = "Casey";

// function changeMe(){
// 	document.getElementById('el').innerHTML = name;
// }



// // var numberofFingers = "10";

// // var isCodingCool = "true";


// // console.log(name);


// var myFriends = ["John", "Steve", "Bill", 8, 5, 6];

// // var myFavThings = [13, "Mint Chip", "Coding", "January 22", 2];

// // var FriendsFavThings = [myFriends, myFavThings];

// // console.log(FriendsFavThings);

// var Peanuts= ["charlie brown", "snoopy"];

// console.log(Peanuts);

// // console.log(myFriends);

// var toyotas = ["Camry", "Prius"];

// var porsches = ["Camero", "Boxer"];

// var cars = [porsches, toyotas];

// //The above variable is the same as the one below.

// var cars = [["Camero", "Boxer"], ["Camry", "Prius"]];

// console.log(cars[1][1]);

// var car = {
// 	make: "Toyota",
// 	model: "Prius"
// };

// console.log(car['make']);

// console.log(car['model']);



// var user = {
// 	firstName: "Casey",
// 	lastName: "Snepar",
// 	birthday: "January 22, XXXX"
// };

// console.log("My name is " + user.firstName + " " 

// 	+ user.lastName);


// //Access data from object through bracket notation
// console.log(user['firstName']);

// //Acess data from object through dot notation
// console.log(user.firstName);



var number1 = 5;
var number2 = 7;

console.log(number1 + number2);

var hello = "Hello";

var world = "World";

alert(hello + world);


var user = {
	firstName: "Casey",
	lastName: "Snepar",
	birthday: "January 22",
	interests: ["Coding", "Swimming", "Eating"]

};

console.log(user.firstName);

console.log(user.lastName);

console.log(user.birthday);

console.log(user.interests);

// if(5>10){
// 	console.log("You'll not see this because 5 isn't greater than 10");
// }else{
// 	console.log("This is true!")
// }

var x = 20;


if(x<10){
	alert('x is less than 10');
	console.log(x);
}else{
	alert("x isn't less than 10");
	console.log(x);
}

if(1>5){
	console.log('hello, 1 is less than 5');
}else if(1===1){
	console.log("1 always equals 1");
}else{
	console.log("We won't get this because 1 is indeed yes than 5");
}

// var response = prompt("Give me 2 numbers");

// function addNumber(numberOne, otherNumber){
// 	return response(numberOne + otherNumber);
// };

// console.log(addNumber(4,5));
// console.log(addNumber(1,10));


// function alertName(somePersonsName){
// 	return alert(somePersonsName);
// }

// alertName("Casey");

// alertName("Roger Federer");


// function alertUser(name){
// 	return alert(name);
// }

// alertUser("John");
// alertUser("Mike");
// alertUser("Casey");

function consoleSomething(){
	return console.log(name);
}

consoleSomething("dog");

consoleSomething("Casey");

for(var i=0; i<10; i++){
	console.log(i);
}

// friends = ["John", "Steve", "Mike", "Sabrina"];

// for(var i = 0; i<friends.length; i++){
// 	console.log(friends[i]);
// }

myFavThings = [["John", "Mike", "Steve"], ["Eating", "Swimming", "Watching the Olympics"]];


for(var i=0; i<myFavThings[0].length; i++){
	console.log(myFavThings[i]);
}

for(var i = 0; i<myFavThings[1].length; i++){
	console.log(myFavThings[i]);
}

x=6;

while(x<10){
	console.log("On number " + x)
	x++;
}




