/**
 * Angular module for pages component. This component is divided to following logical components:
 *
 *  frontend.pages.author
 *  frontend.pages.book
 *  frontend.pages.chat
 *  frontend.pages.messages
 *
 * Each component has it own configuration for ui-router.
 */
(function() {
    'use strict';

    // Define frontend.admin module
    angular.module('frontend.pages', [
        'frontend.pages.about',
        'frontend.pages.author',
        'frontend.pages.book',
        'frontend.pages.chat',
        'frontend.pages.messages',
        'frontend.pages.chess'
    ]);

    // Module configuration
    angular.module('frontend.pages')
        .config(
            [
                '$stateProvider',
                function($stateProvider) {
                    $stateProvider
                        .state('pages', {
                            parent: 'frontend',
                            data: {
                                access: 1
                            },
                            views: {
                                'content@': {
                                    controller: [
                                        '$state',
                                        function($state) {
                                            $state.go('pages.books');
                                        }
                                    ]
                                },
                                'pageNavigation@': {
                                    templateUrl: '/frontend/core/layout/partials/navigation.html',
                                    controller: 'NavigationController',
                                    resolve: {
                                        _items: [
                                            'ContentNavigationItems',
                                            function resolve(ContentNavigationItems) {
                                                return ContentNavigationItems.getItems('pages');
                                            }
                                        ]
                                    }
                                }
                            }
                        })
                    ;
                }
            ]
        );
}());
