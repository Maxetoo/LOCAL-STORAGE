let input = document.querySelector('input');
let ul = document.querySelector('ul');
let submit = document.querySelector('.submit');
let clear = document.querySelector('.btn');

let mainArray = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];
localStorage.setItem('item', JSON.stringify(mainArray));
const main = JSON.parse(localStorage.getItem('item'));
//const remover = localStorage.removeItem('item');

submit.addEventListener('click', function() {
    if (input.value === '') {
        alert('input value');
    } else {
        liMaker(input.value);
        mainArray.push(input.value);
        localStorage.setItem('item', JSON.stringify(mainArray));
        //console.log(ul.children.length);
        // let key = mainArray.length;
        // console.log(key);
    }
});

function liMaker(text) {
    let li = document.createElement('li');
    text = text.charAt(0).toUpperCase() + text.split('').slice(1).join('');
    li.innerHTML = text;
    ul.appendChild(li);
    li.addEventListener('dblclick', function() {
        //ul.removeChild(li);
        let ulCount = ul.children;
        let key = mainArray;
        for (let i = 0; i < key.length; i++) {
            if (key[i] === ulCount[i].textContent()) {
                console.log('l');
            }
        }
    });

    li.addEventListener('click', function() {
        li.classList.toggle('cross');
    });
}

main.forEach(function(item) {
    liMaker(item);
});