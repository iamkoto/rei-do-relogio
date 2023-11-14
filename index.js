const bar = document.getElementById('header-menu__products-text');
const overlay = document.getElementById('overlay');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu-title__box');
const mobileBar = document.getElementById('header-menu__bar')

bar.addEventListener('click', function() {
    overlay.style.display = 'block';
    menu.classList.add('active');
})

close.addEventListener('click', function(){
    overlay.style.display = 'none';
    menu.classList.remove('active');
})

mobileBar.addEventListener('click', function(){
    overlay.style.display = 'block';
    menu.classList.add('active');
})
    
