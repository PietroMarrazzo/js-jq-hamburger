// acquisisco le variabili che interagiranno tra loro
// hamburger da clickare
// hamburgerMenu da far comparire
// hamburgerClose per nascondere
var hamburger = $('.header-right a i');
var hamburgerMenu = $('.hamburger-menu');
var hamburgerClose = $('.hamburger-menu .close');

// esercizio con aggiunta classi
// hamburger.click(function() {
//     hamburgerMenu.addClass('active');
// })

// hamburgerClose.click(function() {
//     hamburgerMenu.removeClass('active');
// })


// esercizio con show/hide
// hamburger.click(function() {
//     hamburgerMenu.show(1500);
// })

// hamburgerClose.click(function() {
//     hamburgerMenu.hide(1500);
// })


// esercizio con fadeIn/fadeOut
// hamburger.click(function() {
//     hamburgerMenu.fadeIn(1500);
// })

// hamburgerClose.click(function() {
//     hamburgerMenu.fadeOut(1500);
// })


// esercizio con toogle
// hamburger.click(function() {
//     hamburgerMenu.Toggle(1500);
// })

// hamburgerClose.click(function() {
//     hamburgerMenu.Toggle(1500);
// })


// esercizio con slideUp/Down
hamburger.click(function() {
    hamburgerMenu.slideDown(1500);
})

hamburgerClose.click(function() {
    hamburgerMenu.slideUp(1500);
})