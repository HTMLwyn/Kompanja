/**
 *  Cache DOM Selectors
 */
const $root = $('html');
const $body = $('body');



/**
 * Config
 */
const config = {
};



/**
 *  Document ready event
 */
$(document).ready(function () {

    // Initialize pagepiling.js
    if ($('.piling-section-wrapper').length > 0) {

        // Get all sections, add their anchor values to an array
        let sectionAnchors = [];
        $('.piling-section').each(function() {
            sectionAnchors.push($(this).data('anchor'));
        });

        $('.piling-section-wrapper').pagepiling({
            anchors: sectionAnchors,
            scrollingSpeed: 1000,
            easing: 'swing',
            sectionSelector: '.piling-section',

            //events
            onLeave: function(index, nextIndex, direction) {

            },
            afterLoad: function(anchorLink, index) {

            },
            afterRender: function() {

            },
        });
    }
});



/**
 *  Window pageshow event
 */
$(window).on('pageshow', function () {



});



/**
 *  Functions
 */
