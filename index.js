import preenchDiv  from "./data.js";


preenchDiv();


let currentItem = 0;

const cards = document.querySelectorAll('.card');
const controls = document.querySelectorAll('button');

controls.forEach(control => control.addEventListener('click', function() {
    
    if(control.classList.contains('is-right')){
        currentItem++
    }else{
        currentItem > 0 && currentItem--
    }

    cards[currentItem].classList.remove('off-focus')

    console.log(currentItem)
}))