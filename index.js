import preenchDiv  from "./data.js";


preenchDiv();


let currentItem = 0;

const cards = document.querySelectorAll('.card');
const controls = document.querySelectorAll('button');

controls.forEach(control => control.addEventListener('click', function() {
    
    if(control.classList.contains('is-right')){
        currentItem++
        if(currentItem >= cards.length){
            currentItem = 0
        }
    }else{
        currentItem > 0 && currentItem--
        if(currentItem === 0){
            currentItem = cards.length - 1
        }
    }

    cards[currentItem].classList.remove('off-focus')

    console.log(currentItem)
}))