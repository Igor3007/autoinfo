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
});