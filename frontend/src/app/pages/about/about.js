/**
 * Angular module for frontend.pages.about component. Basically this file contains actual angular module initialize
 * and route definitions for this module.
 */
(function() {
    'use strict';

    // Define frontend.public module
    angular.module('frontend.pages.about', []);

    // Module configuration
    angular.module('frontend.pages.about')
        .config(
            [
                '$stateProvider',
                function($stateProvider) {
                    $stateProvider
                        .state('pages.about', {
                            url: '/about',
                            data: {
                                access: 0
                            },
                            views: {
                                'content@': {
                                    templateUrl: '/frontend/pages/about/about.html'
                                },
                                'pageNavigation@': false
                            }
                        })
                    ;
                }
            ]
        );

}());
