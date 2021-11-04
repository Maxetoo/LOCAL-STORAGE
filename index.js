let input = document.querySelector('input');
let ul = document.querySelector('ul');
let submit = document.querySelector('.submit');
let clear = document.querySelector('.btn');

//INIT...
//Get intial items in storage.
let mainArray = 
window.localStorage.getItem('item') ? 
JSON.parse(window.localStorage.getItem('item')) : 
[];
window.localStorage.setItem('item', JSON.stringify(mainArray));
//Update Dom(list) with array elements
mainArray.map(function(item) {
    liMaker(item);
});




submit.addEventListener('click', function() {
    //on event add item to array, update list, update localStorage
    if (input.value === '') {   alert('Please input value'); return; }
    mainArray.push(input.value);
    liMaker(input.value);
    window.localStorage.setItem('item', JSON.stringify(mainArray));
});
clear.addEventListener('click', function() {
    //on event get all lis add remove (with removeitem function)
    [...ul.children].map(function(li){
        removeItem(li);
    })
});
    
    
    
    

function liMaker(text) {
    //add text to listitem-> add listitem to list
    //add listener, removeitem onevent.
    let li = document.createElement('li');
    text = text.charAt(0).toUpperCase() + text.split('').slice(1).join('');
    li.innerHTML = text;
    ul.appendChild(li);
    li.addEventListener('click', function(e) {
        removeItem(e.target);
    });
    li.addEventListener('click', function() {
        li.classList.toggle('cross');
    });
} 
function removeItem(li){
    //Get index of "li" (through indexOf li in array of ul's children).
    //[...] converts ul.children from a nodelist into an array.
    //remove item at itemIndex in mainArray (with splice)
    //remove li from ul;
    //Update our localStorage
    var itemIndex = [...ul.children].indexOf(li)
    console.log("To remove item at index:"+itemIndex+"");
    mainArray.splice(itemIndex, 1);
    ul.removeChild(li);
    window.localStorage.setItem('item', JSON.stringify(mainArray));
}   


