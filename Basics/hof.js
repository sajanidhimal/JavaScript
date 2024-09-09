//callback function is a function that is passed as an argument to another function.
// function sayHello(name, callback) {
//   console.log(name);
//     callback();
// }

// function sayBye(){
//     console.log("bye");
// }
// sayHello("sajani", sayBye);


// const fruits = ['apple', 'banana', 'mango', 'orange', 'papaya'];

// //forEach HOF
// fruits.forEach(function(fruit){
//     console.log(fruit);
// }
// );

// const numbers = [1, 2, 3, 4, 5];
// const sqNum = []
// numbers.forEach(function(number){
//     sqNum.push(number*number);
// }
// );
// console.log(sqNum);

// //map HOF
// const sqnum= numbers.map(function(number){
//     return number*number;
// });
// console.log(sqnum);

const users = [
    {id: 1, firstname: 'sajani', lastname: 'kc', age: 23},
    {id: 2, firstname: 'sachin', lastname: 'Gc', age: 24},
    {id: 3, firstname: 'sachini', lastname: 'Dc', age: 25}, ];

    // users.forEach((user) => {
    //     console.log(user.firstname + ' ' + user.lastname);
    // });

    const reslt = users.map((user) => {
        return {
            ...user,
            fullname: user.firstname + ' ' + user.lastname,
        }
    });
    console.log(reslt);
    console.log(users);


    const numbers2 = [
        {num: 1,
        nam: 'a'},
        {num: 2,
        nam: 'b'},
        {num: 3,
        nam: 'c'},
    ];
    // numbers2.forEach((numb) => {
    //     console.log(numb.num + ' ' + numb.nam);
    // })

    const rslt2 = numbers2.map((nmbr) => {
        return {
            ...nmbr,
            //num: nmbr.num,
            // full: nmbr.num + ' ' + nmbr.nam,
        }
    })
    console.log(rslt2);


    //filter HOF

    const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNum= numbers3.filter(function(numbe){
        return numbe % 2 != 0;

    })
    console.log(evenNum);


    //example

    const books = [
        {
            title: 'book1',
                Author: 'author1',
                year: 2020,
        },
        {
            title: 'book2',
            Author: 'author2',
            year: 1021,
        },
        {
            title: 'book3',
            Author: 'author3',
            year: 2022,
        },
        {
            title: 'book4',
            Author: 'author4',
            year: 2023,
        },
        {
            title: 'book5',
            Author: 'author5',
            year: 1024,
        },

    ];

    const outBook = books.filter(function(book){
       // return book.year > 2000;
        return book.Author === 'author1';
    });

    const authr = outBook.length > 0 ? outBook[0].Author : 'author not found';
    console.log(authr);


    const files = ["app.js", "index.html", "style.css", "script.js", "data.json"];

    const otfile = files.filter(function(file) {
       // return file.includes('.js');
         return file.endsWith('.js');
    })
    console.log(otfile);


    const data = [ 10, null, 0, 20, undefined, 30, NaN, 40, '', 50];

    const outdata = data.filter(function(dat){
        return dat !==null && dat !== undefined && dat !== '' && !isNaN(dat);
    })
    console.log(outdata);


    //reduce HOF

    const numbers4 = [1, 2, 3, 4, 5];
   const redu = numbers4.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
        }, 0);
        console.log(redu);


        const product = [
            {
                name: 'laptop',
                price: 1000,
                count: 5,
            },
            {
                name: 'desktop',
                price: 2000,
                count: 10,
            },
            {
                name: 'phone',
                price: 500,
                count: 15,
            },
        ];

        const total = product.reduce(function(accu, curr){
            accu.totalprice += (curr.price * curr.count);
            accu.totalcount += curr.count;
            return accu;
        }, {totalprice: 0, totalcount: 0});
console.log(total);


//example
const people = [
    {name: 'sajani', ag: 23},
    {name: 'achin', ag: 18},
    {name: 'chini', ag: 25},
    {name: 'hin', ag: 20},
    {name: 'in', ag: 25},
];

const groupage = people.reduce(function(acc, cur){
    const ag = cur.ag;
    if(! acc[ag]){
        acc[ag] = [];
    }
    acc[ag].push(cur);
    return acc;

}, {});
console.log(groupage);

