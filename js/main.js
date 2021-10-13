var elBtn = document.querySelector('.btn');
var elHead = document.querySelector('.header');

elBtn.addEventListener('click', (evt) =>{
    elHead.classList.toggle('header--active')
});