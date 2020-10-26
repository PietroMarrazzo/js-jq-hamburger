// acquisisco le variabili che interagiranno tra loro
// hamburger da clickare
// hamburgerMenu da far comparire
var hamburger = $('.header-right a i');
var hamburgerMenu = $('.hamburger-menu');
var hamburgerClose = $('.hamburger-menu .close');

hamburger.click(function() {
    hamburgerMenu.addClass('active');
})

hamburgerClose.click(function() {
    hamburgerMenu.removeClass('active');
})
