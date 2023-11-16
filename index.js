const bar = document.getElementById('header-menu__products-text');
const overlay = document.getElementById('overlay');
const menu = document.querySelector('.menu');
const submenu = document.querySelector('.submenu')
const close = document.querySelector('.menu-title__box');
const mobileBar = document.getElementById('header-menu__bar');
const opensubmenu = document.querySelector('.menu-item');
const closesubmenu = document.querySelector('.submenu-title__box');
const backtomenu = document.querySelector('.submenu-top');

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

opensubmenu.addEventListener('click', function() {
    submenu.classList.add('active');
})

closesubmenu.addEventListener('click', function() {
    overlay.style.display = 'none';
    submenu.classList.remove('active');
    menu.classList.remove('active');
})

backtomenu.addEventListener('click', function() {
    submenu.classList.remove('active');
})




    
