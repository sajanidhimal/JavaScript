const person = {
    name: "sajani",
    age: 22,
}

for(let key in person){
    console.log(key,person[key])
}

//console.log(nam)
//var nam = "sajani" // undefined
//let nam = "saj" // ReferenceError: Cannot access 'nam' before initialization

// add()
// function add(a,b){
//     console.log(1+1)
// }

// ad() // ReferenceError: Cannot access 'ad' before initialization
// let ad = () => {
//     console.log(1+1)
// }


// addd()  //addd is not a function at Object.<anonymous>
// var addd = function(){
//     console.log(1+1)
// }


//undefined
function example(){
    console.log(y)
    var y = 1
}
example()

