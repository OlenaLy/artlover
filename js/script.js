

const menu = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

const navItem = document.querySelectorAll('.off-screen-menu .link');

navItem.forEach(item => {

    item.addEventListener('click', () => {
        menu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    } )
})