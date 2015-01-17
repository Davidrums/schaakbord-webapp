/**
 * This file contains all necessary Angular controller definitions for 'frontend.pages.chess' module.
 *
 * Note that this file should only contain controllers and nothing else.
 */
(function() {
    'use strict';

    /**
     * Main Chess controller which handles the actions on this Chess example page. This controller is fired up whenever
     * user enters to following url:
     *
     *  http://{YourServer}:{YourPort}/chess
     *
     * where
     *  YourServer  =   Usually 'localhost', this depends on your setup.
     *  YourPort    =   By default 3000 for production and 3001 for development or something else depending on your
     *                  setup.
     *
     * Controller handles message loading and creating of new messages to backend side. Basically really simple stuff.
     *
     * @todo
     *  1) implement 'enter' and 'leave' status messages to chess
     *  2) private messages to another user
     *  3) do not load all messages when user enters to chess
     *  4) add notification about new chess messages, if user is elsewhere on app
     */
    angular.module('frontend.pages.chess')
        .controller('ChessController',
            [
                '$scope', '$timeout',
                'Storage',
                function(
                    $scope, $timeout,
                    Storage
                ) {

                    // Get current nick of user
                    $scope.nick = Storage.get('chess.nick');
                }
            ]
        );
}());
