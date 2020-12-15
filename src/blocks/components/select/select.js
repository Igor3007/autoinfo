import $ from 'jquery';

$(document).ready(function () {
    $('ul[data-ul-select] li').on('click', function (event) {

        if ($(this).hasClass('active')) {
            event.preventDefault();
        }

        $('ul[data-ul-select] li ').removeClass('active')
        $(this).addClass('active')
        $(this).parent().toggleClass('open');
    })
});