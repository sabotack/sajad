let qsNav = document.querySelector('nav');
let qsNavModalBg = document.querySelector('.nav-modal-bg');
let qsBurgerMenu = document.querySelector('#burger-menu');


qsBurgerMenu.addEventListener('click', () => {
    qsBurgerMenu.children[0].classList.toggle('active');
    
    if (qsNav.style.display != 'flex') {
        qsNav.style.display = 'flex';
        qsNavModalBg.style.display = 'block';
    }
    else {
        qsNav.style = '';
        qsNavModalBg.style = '';
    }
});

qsNavModalBg.addEventListener('click', () => {
    qsNav.style = '';
    qsNavModalBg.style = '';
    qsBurgerMenu.children[0].classList.remove('active');
});

window.onscroll = () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('header').classList.add("header-scroll");
    }
    else {
        document.querySelector('header').classList.remove("header-scroll");
    }
};
