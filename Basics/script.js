console.log('Hello, Sajani!');
console.log('Hello dear!');

if(true){
    const cup = 'tea';
    console.log(cup, 'inside if block');
}
let cup;
console.log(cup, 'outside if block');

let name = 'Sajani';
console.log(name + 100);

let a="abc";
let b="def";
let c= a + b;
console.log(c);

let alpha = ['a', 'b', 'c', 'd', 'e', 10, true, 20, false,];
console.log(alpha[3]);
console.log(alpha[6]);

let beta = {
    name: 'Sajani',
    age: 20,
}
console.log(beta);

const days = ['Sunday', 'Monday', 'Tuesday',];
days[3] = "wednesday";
days.push('Thursday');
days.pop();
days.unshift('Saturday');
days.shift();
console.log(days);
console.log(days.length);

const num = [1, 2, 3, 4, 5,];
const newNum = num.slice(1, 4);
console.log(newNum);
console.log(num);

let newSplice = num.splice(2, 1 , "saj", "ani");
console.log(newSplice);
console.log(num);
console.log(newSplice);

let txt = "I am free Sajani";
let newTxt = txt.split(" ")
console.log(newTxt);

const free = {
    name: 'Sajani',
    state: 'free',
    life: 'happy',
    money: "1million",
}
free.stat= "deatched";
Object.freeze(free);
console.log(free);
console.log(Object.keys(free));
console.log(Object.values(free));

//conditional statement
// if elseif else
const isRaining = true;
if (isRaining) {
    console.log('carry a raincoat');
}
else {
    console.log('carry a sunglasses');
}
 //or Ternary operator

const result = isRaining ? "Cary Umbrella" : "Don't carry umbrella";
console.log(result)

//or
// short circuit evaluation
const isRain = false;
const res = isRain && "Do carry" || "Dont carry";
console.log(res);

// nullish coalescing operator

let age = null;
// this 
if (age== null || age == undefined) {
    age = "No age"
}
 //or this

let reslt = age ?? "No age"
console.log(reslt)


const temp = 30;
if (temp < 20) {
    console.log ('wear a jacket');
}
else if (temp > 20 && temp <= 30) {
    console.log('carry a jacket')
}
else {
    console.log('wear a sunglass');
}



