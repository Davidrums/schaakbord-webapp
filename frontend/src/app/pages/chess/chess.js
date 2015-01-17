/**
 * Chess component to wrap all book specified stuff together. This component is divided to following logical components:
 *
 *  Controllers
 *  Directives
 *  Models
 *
 * All of these are wrapped to 'frontend.pages.chess' angular module.
 */
(function() {
    'use strict';

    // Define frontend.pages.chess angular module
    angular.module('frontend.pages.chess', ['nywton.chess']);

    // Module configuration
    angular.module('frontend.pages.chess')
        .config(
            [
                '$stateProvider',
                function($stateProvider) {
                    $stateProvider
                        // Chess
                        .state('pages.chess', {
                            url: '/pages/chess',
                            views: {
                                'content@': {
                                    templateUrl: '/frontend/pages/chess/chess.html',
                                    controller: 'ChessController'
                                }
                            }
                        })
                    ;
                }
            ]
        );
}());
