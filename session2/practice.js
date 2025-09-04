// to print the name and age

let name="vaishnavi";
var age=24;
const pi=22.45;
console.log(name,age,pi);

// var has a functional scope and also it  can be redeclared and reassigned.
var x=10;{               
    var x=20;
}
console.log(x);

/* let has a block scope we cant redeclared 
let x=10;{
    let x=20;
}
console.log(x); */


//strings
let words="hello "+name+" your age is "+age;
console.log(words);
let text="vaishnavi mane";
console.log(text.length);
console.log("length of words :"+words.length);
console.log("uppercase:",words.toUpperCase());


//arrays
let fruits=["banana","mango","grapes","apple"];
console.log(fruits);

// add to the end 
fruits.push("orange");
console.log(fruits);

// remove the last one
fruits.pop();
console.log(fruits);

// remove the first fruit
fruits.shift("pineapple");
console.log(fruits);

// add to the frond
fruits.unshift("chiku")
console.log(fruits);

//loops
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
 
//conditional statements
let score=75;
if(score>=75){
    console.log("grade : A");
}
else if(score>=75){
    console.log("grade :B")
}
else{
    console.log("grade: c")
}




