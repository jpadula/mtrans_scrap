'use strict';

angular.module('mean.scrap').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('scrap example page', {
            url: '/scrap/example',
            templateUrl: 'scrap/views/index.html'
        })
        .state('scrap red',{
            url:'/scrap',
            templateUrl:'scrap/views/index.html'
        })
        .state('scrap home',{
        	url:'/',
        	templateUrl:'scrap/views/index.html'
        });
    }
]);
