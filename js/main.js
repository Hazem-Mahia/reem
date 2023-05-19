// change nav style on scroll 
window.addEventListener('scroll', () => {
    document.querySelector("nav").
        classList.toggle('window-scrolled',
            window.scrollY > 0)
});

// contact buttons 
let textButton = document.querySelectorAll(".contact-btn");

textButton.forEach(textButton => {
    let text = textButton.querySelector("p");

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform:rotate(${index * 12}deg)">${character}</span>`).join("")
});

// 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }
});

const nav = document.querySelector('.nav-links');
const openNavBtn = document.querySelector('#nav-toggle-open');
const colseNavBtn = document.querySelector('#nav-toggle-close');

let openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    colseNavBtn.style.display = 'inline-block';

}

openNavBtn.addEventListener('click', openNav);

let colseNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    colseNavBtn.style.display = 'none';

}

colseNavBtn.addEventListener('click', colseNav);

if (document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', colseNav);
    })
}