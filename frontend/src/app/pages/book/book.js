/**
 * Book component to wrap all book specified stuff together. This component is divided to following logical components:
 *
 *  Controllers
 *  Models
 *
 * All of these are wrapped to 'frontend.pages.book' angular module.
 */
(function() {
    'use strict';

    // Define frontend.pages.book angular module
    angular.module('frontend.pages.book', []);

    // Module configuration
    angular.module('frontend.pages.book')
        .config(
            [
                '$stateProvider',
                function($stateProvider) {
                    $stateProvider
                        // Book list
                        .state('pages.books', {
                            url: '/pages/books',
                            views: {
                                'content@': {
                                    templateUrl: '/frontend/pages/book/list.html',
                                    controller: 'BookListController',
                                    resolve: {
                                        _items: [
                                            'ListConfig',
                                            'BookModel',
                                            function resolve(
                                                ListConfig,
                                                BookModel
                                            ) {
                                                var config = ListConfig.getConfig();

                                                var parameters = {
                                                    limit: config.itemsPerPage,
                                                    sort: 'releaseDate DESC'
                                                };

                                                return BookModel.load(parameters);
                                            }
                                        ],
                                        _count: [
                                            'BookModel',
                                            function resolve(BookModel) {
                                                return BookModel.count();
                                            }
                                        ],
                                        _authors: [
                                            'AuthorModel',
                                            function resolve(AuthorModel) {
                                                return AuthorModel.load();
                                            }
                                        ]
                                    }
                                }
                            }
                        })

                        // Single book
                        .state('pages.book', {
                            url: '/pages/book/:id',
                            views: {
                                'content@': {
                                    templateUrl: '/frontend/pages/book/book.html',
                                    controller: 'BookController',
                                    resolve: {
                                        _book: [
                                            '$stateParams',
                                            'BookModel',
                                            function resolve(
                                                $stateParams,
                                                BookModel
                                            ) {
                                                return BookModel.fetch($stateParams.id, {populate: 'author'});
                                            }
                                        ]
                                    }
                                }
                            }
                        })

                        // Add new book
                        .state('pages.book.add', {
                            url: '/pages/book/add',
                            data: {
                                access: 2
                            },
                            views: {
                                'content@': {
                                    templateUrl: '/frontend/pages/book/add.html',
                                    controller: 'BookAddController',
                                    resolve: {
                                        _authors: [
                                            'AuthorModel',
                                            function resolve(AuthorModel) {
                                                return AuthorModel.load();
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
