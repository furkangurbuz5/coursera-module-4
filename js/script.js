

function makeMultiplier(multiplier){
	var myFunFunc = function (x) {
		return multiplier * x;
	};
	return myFunFunc;
}

var operation = makeMultiplier(10);
//console.log(operation(10));

//primitives are pass by value, objects are pass by reference 


let a = {x:7};
let b = a;

//a = {x:12}; // changed pointer

a.x = 12; // changed value in reference 
b.x = 8;




function Circle(radius){
	this.radius = radius;
}

var myCircle = new Circle(10);

let literalCircle = {
	radius: 10,

	getArea: function(){
		console.log(this);
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());




let arr = new Array();
arr[0] = "Furkan";
arr[1] = 2;
arr[2] = function(name){
	console.log("Hello" + name);
};
arr[3] = {course: "HTML, CSS & JS"};




let names = ["Furkan", "SpongeBob", "Patrick", "Squidward"];

for(let name in names){
	console.log(names[name]);
}

console.log(names.length);

let counter = 0;

for(let i = 0; i< names.length; i++){
	counter++;
}

console.log(counter);

