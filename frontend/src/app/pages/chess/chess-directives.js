/**
 * This file contains all necessary Angular directive definitions for 'frontend.pages.chess' module.
 *
 * Note that this file should only contain directives and nothing else.
 */
(function() {
    'use strict';

    /**
     * Directive to resize "chess" screen to take all "possible" space on browser screen. This is just cruel thing to
     * do, but it works like a charm.
     */
    angular.module('frontend.pages.chess')
        .directive('chessScreen',
            [
                '$timeout',
                function($timeout) {
                    return {
                        restrict: 'C',
                        link: function(scope, element) {
                            var resize = function() {
                                var totalHeight = angular.element(document).height() - 170;

                                angular.element(element).css('height', totalHeight + 'px');
                            };

                            angular.element(window).resize(function() {
                                $timeout(resize);
                            });

                            resize();
                        }
                    };
                }
            ]
        );
}());
