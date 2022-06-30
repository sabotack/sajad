window.onscroll = function() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('header').classList.add("header-scroll");
    }
    else {
        document.querySelector('header').classList.remove("header-scroll");
    }
};