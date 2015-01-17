/**
 * Messages component which is divided to following logical components:
 *
 *  Controllers
 *
 * All of these are wrapped to 'frontend.pages.messages' angular module.
 */
(function() {
    'use strict';

    // Define frontend.pages.messages angular module
    angular.module('frontend.pages.messages', []);

    // Module configuration
    angular.module('frontend.pages.messages')
        .config(
        [
            '$stateProvider',
            function($stateProvider) {
                $stateProvider
                    // Messages
                    .state('pages.messages', {
                        url: '/pages/messages',
                        views: {
                            'content@': {
                                templateUrl: '/frontend/pages/messages/messages.html',
                                controller: 'MessagesController'
                            }
                        }
                    })
                ;
            }
        ]
    );
}());
