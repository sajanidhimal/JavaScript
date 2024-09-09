
const h1 = document.querySelector('h1');
console.log(h1.innerText);
h1.innerText = 'Changed';
console.log(h1.innerText);

const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', ()=> {
    h1.textContent = 'Changed again';
    var para = document.createElement('p');
    para.textContent = 'This is a new paragraph';
    document.body.appendChild(para);
})

