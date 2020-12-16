import $ from 'jquery';

$(document).ready(function(){
    $('.nav__hamburger').on('click', function(){
        $(this).toggleClass('open')

        var innerHeaderHeight = $('header').innerHeight()

        $('.mobile-menu').toggleClass('open').css({
            'top': innerHeaderHeight+'px'
        })

        $('html').toggleClass('hidden')
    });
})