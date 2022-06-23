window.onscroll = function() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector('header').classList.add("header-scroll");
    }
    else {
        document.querySelector('header').classList.remove("header-scroll");
    }
};