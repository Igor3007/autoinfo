import "./import/modules";
import "./import/components";
import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";
svgPolyfill();

import $ from 'jquery';
import './import/jquery.fancybox.min';
import './import/list.js';

$(document).ready(function() {
    $('[data-list="collapse"]').abixTreeList({
        collapsedIconClass: 'icon-cross',
        expandedIconClass: 'icon-cross open',
    });

    $('[data-brandList="toggle"]').on('click', function(event){

        event.preventDefault()

        const elem = $('.popular-brands__items li');
        
        if (!elem.hasClass('visible')) {
            $(this).text('Скрыть')
            elem.addClass('visible')
        } else {
            $(this).text('Показать все марки')
            elem.removeClass('visible')
        }
        
    })
});