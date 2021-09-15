$(document).ready(main);

var contador = 0;

function main() {
    $('.menu-bar').click(function(){
        if (contador == 0) {
            $('nav').animate ({
                let: '0'
            });
            contador = 1;
        }
        else {
             contador = 0;
            $('nav').animate ({
                left: '-100'
            });
        }
    });
    $('.submenu').click(function() {
        $(this).children('.childrem').slideToggle();
    });
}