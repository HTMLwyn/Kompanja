/**
 *  Cache DOM Selectors
 */
const $root = $('html');
const $body = $('body');
const $main = $body.find('main');



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
        const arrSections = $('.piling-section');
        let sectionAnchors = [];
        arrSections.each(function() {
            sectionAnchors.push($(this).data('anchor'));
        });

        $('.piling-section-wrapper').fullpage({
            anchors: sectionAnchors,
            navigation: true,
            scrollingSpeed: 1000,
            sectionSelector: '.piling-section',

            onLeave: function(origin, destination, direction) {

                // Switch animation classes
                $(origin.item).removeClass('visible');
                $(destination.item).addClass('visible');
            },
            afterLoad: function(anchorLink, index) {
            },
            afterRender: function() {

                // Get first slide, either by hash or using the first as a default
                let $currentSlide = '';
                const hash = window.location.hash;
                if (hash) {
                    $currentSlide = $('.piling-section[data-anchor="' + hash.replace('#', '') + '"]');
                } else {
                    $currentSlide = $(arrSections[0]);
                }

                // Add animation class
                $currentSlide.addClass('visible');
            },
        });
    }
});



/**
 *  Window pageshow event
 */
$(window).on('pageshow', function () {

    // Add loaded class to main
    $main.addClass('loaded');

});



/**
 *  Functions
 */
