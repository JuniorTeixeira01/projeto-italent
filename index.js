import preenchDiv  from "./dados/data.js";


preenchDiv();


let currentItem = 0;

let cards = document.querySelectorAll('.card');
let maxCard = cards.length;


const controls = document.querySelectorAll('button');

controls.forEach(control => control.addEventListener('click', function() {
    
    const isLeft = control.classList.contains('is-left')


        isLeft ? currentItem -- : currentItem ++

        if(currentItem >= maxCard){
            currentItem = 0;
        }
        if(currentItem < 0){
            currentItem = maxCard - 1
        }


        cards.forEach(card => card.classList.remove('off-focus'));

        cards[currentItem].scrollIntoView({inline: "center", behavior: "smooth"})
        
        cards[currentItem].classList.add('off-focus');
}))