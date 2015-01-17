/**
 * Chat component to wrap all book specified stuff together. This component is divided to following logical components:
 *
 *  Controllers
 *  Directives
 *  Models
 *
 * All of these are wrapped to 'frontend.pages.chat' angular module.
 */
(function() {
    'use strict';

    // Define frontend.pages.chat angular module
    angular.module('frontend.pages.chat', []);

    // Module configuration
    angular.module('frontend.pages.chat')
        .config(
            [
                '$stateProvider',
                function($stateProvider) {
                    $stateProvider
                        // Chat
                        .state('pages.chat', {
                            url: '/pages/chat',
                            views: {
                                'content@': {
                                    templateUrl: '/frontend/pages/chat/chat.html',
                                    controller: 'ChatController',
                                    resolve: {
                                        _messages: [
                                            'Moment',
                                            'MessageModel',
                                            function resolve(
                                                Moment,
                                                MessageModel
                                            ) {
                                                var parameters = {
                                                    where: {
                                                        createdAt: {'>': new Moment().format()}
                                                    }
                                                };

                                                return MessageModel.load(parameters);
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
