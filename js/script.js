

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

function linkInst (){
    window.location.href='https://www.instagram.com/artlover_lessons?utm_source=qr&igsh=MXFrcGF6MHBsajU4OQ=='
}
document.querySelector('.btn-title').addEventListener('click', linkInst);
document.querySelector('#instagram-img').addEventListener('click', linkInst);

const textLink = document.querySelector('.my-item-wrap');

textLink.addEventListener('click', function(e){
    if (e.target.tagName != 'LI') return;
    alert('Чекаємо макет дизайнера');
})
