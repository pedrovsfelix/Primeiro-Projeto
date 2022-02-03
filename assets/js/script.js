let navbar = document.querySelector('.header__bar .header__navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#header__close-navbar').onclick = () => {
    navbar.classList.remove('active');
};